# TG-CHAT-BOT-LLM
Телеграмм бота для анализа промптов с помощью LLaMA3 и для обучения промпт-инжинирингу

бот сделан для конкурса "ТехноОлимпа" для заказчика НФИИ

Функционал :

/start - запуск бота и регистрация пользователя
/theme - выдает рандомную тему для изучения
/test - проводит тестирование по изученным темам
/stats - показывает общую статистику пользователя
/profile - показывает профиль, опыт, уровень, достижения пользователя
/create_prompt - команда для анализа вашего промпта
/best_prompts - ваши лучшие промпты
/leaderboard  - список лидеров по опыту


Запуск :

1. Так как LLaMA3 используется как локальное решение нам нужно установить ollama : после ее установки в в консоли ollama прописать (ollama pull llama3)
2. Бот запускается через файл main.py
3. Базы данных хранятся в типе .json

Используемые библиотеки :
1. PyTelegramBotAPI
2. SentenceTransformers
3. time
4. requests
5. json
6. os
7. random
8. feedparser
9. translate
10. xml.etree.ElementTree
11. faiss-cpu
12. numpy
13. bs4
14. Wikipedia API

скрины :

![{0FE0EA09-5B8C-46A7-B903-96A2D78A9B26}](https://github.com/user-attachments/assets/f3015630-1969-4cfb-9518-7caa089f8e0e)
![{749BA947-EE45-404A-9EF4-69D4A4015770}](https://github.com/user-attachments/assets/21f9c6a1-6951-4001-ac0f-cac0d69c9ead)
![{2B219C9D-6EEB-4B79-A32D-EAF452EF2EC7}](https://github.com/user-attachments/assets/2853ee59-aa44-4157-9a57-d15860dbc941)
![{B2BC3EB4-A175-4134-A2C1-980E0EC3F587}](https://github.com/user-attachments/assets/bad628ec-90f0-4b1b-9696-9349ee8bd87a)
![{0048CCA5-00AC-4E43-9249-9F9FD0030CAC}](https://github.com/user-attachments/assets/299a8032-57a7-4e46-96d8-71ff7ef7e3a0)
![{B51C75CC-8929-4887-9B75-4C6A5B610146}](https://github.com/user-attachments/assets/9d02951d-1a06-48c6-9552-12f6f87a57d7)
![{9892C689-4657-42CF-96EB-3CD469621569}](https://github.com/user-attachments/assets/31faa690-319d-4bd1-b8a0-e5b141bf2070)










