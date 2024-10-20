from flask import Flask, jsonify
from flask_cors import CORS
import queryMySQL as q

app = Flask(__name__)
CORS(app    )

# Configuracion base de datos
db = q.DataBaseLovellWeb(
    user='avnadmin',
    passw='AVNS_2whSj1oNfbDLKCcxN7d',
    host='lovell-web-database-zaredark-6f70.j.aivencloud.com',
    database='lovell-web',
    port=23336
)

@app.route('/users', methods=['GET'])
def getUser():
    try:
        users = db.get_user()
        if users:
            return jsonify(users), 200  # Devuelve los usuarios en formato JSON
        else:
            return jsonify({'error': 'No user found'}), 404  # No se encontraron usuarios
    except Exception as e:
        return jsonify({'error': str(e)}), 500  # Manejo de errores
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
