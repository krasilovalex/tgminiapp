import requests
import time


#URL API Ollama
OLLAMA_API_URL = "http://localhost:11434/api/generate"

# connect llama

def query_ollama_for_feedback(prompt):
    payload = {
        "model": "llama3",
        "prompt": f"Проанализируй следующий промпт и дай рекомендацию по улучшению: (Отвечай только на русском языке!).\n\n{prompt}",
        "stream": False,
        "options": {
            "temperature": 0.7,
            "language": "ru"
        }
    }
    try:
        response = requests.post(OLLAMA_API_URL, json=payload, timeout=300)
        response_data = response.json()
        time.sleep(5)
        return response_data.get("response", "Ошибка обработки запроса.")
    except Exception as e:
        return f"Ошибка запроса к Ollama: {e}"
    except requests.exceptions.ReadTimeout:
        return "Ошибка: запрос занял слишком много времени. Попробуйте позже."
    except requests.exceptions.RequestException as e:
        return f"Ошибка запроса: {e}"
        


        # модификация анализа
def analyze_prompt_with_ollama(prompt):
    ollama_feedback = query_ollama_for_feedback(prompt)
    if ollama_feedback:
        return ollama_feedback
    return "Ошибка при анализе запроса. Попробуйте позже."
