from flask import Flask, jsonify
import queryMySQL as q

app = Flask(__name__)

# Configuracion base de datos
db = q.DataBaseLovellWeb(
    user='if0_37435271',
    passw='DDLv5NkajAu3zxF',
    host='sql210.infinityfree.com',
    database='if0_37435271_lovell_web',
    port=3306
)

@app.route('/users', methods=['GET'])
def getUser():
    try:
        users = db.get_user()
        return jsonify(users), 200  # Devuelve los usuarios en formato JSON
    except Exception as e:
        return jsonify({'error': str(e)}), 500  # Manejo de errores
    
if __name__ == '__main__':
    app.run(debug=True)