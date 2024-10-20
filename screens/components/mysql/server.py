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
def get_user():
    try:
        user = db.get_user()  # Obtiene un único usuario
        
        if user is None:
            return jsonify({'message': 'No user found'}), 404  # Devuelve 404 si no se encuentra un usuario
            
        return jsonify(user), 200  # Devuelve el usuario en formato JSON
    except Exception as e:
        return jsonify({'error': str(e)}), 500  # Manejo de errores
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
