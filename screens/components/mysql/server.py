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
        return jsonify(users), 200  # Devuelve los usuarios en formato JSON
    except Exception as e:
        return jsonify({'error': str(e)}), 500  # Manejo de errores
    
if __name__ == '__main__':
    app.run(debug=True, port=10000)
