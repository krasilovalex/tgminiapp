from flask import Flask, jsonify, send_from_directory
import json

app = Flask(__name__, static_folder="public")

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3000)

@app.route('/api/user/<int:user_id>')
def get_user_data(user_id):
    with open('user_history.json', 'r', encoding='utf-8') as f:
        users = json.load(f)
    user_data = users.get(str(user_id))
    if user_data:
        return jsonify(user_data)
    else:
        return jsonify({'level': 1, 'experience': 0, 'achievements': []})
    
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)
