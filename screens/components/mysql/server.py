from flask import Flask, jsonify, request
from flask_cors import CORS
import queryMySQL as q

app = Flask(__name__)
CORS(app)

# Configuracion base de datos
db = q.DataBaseLovellWeb(
    user='avnadmin',
    passw='AVNS_2whSj1oNfbDLKCcxN7d',
    host='lovell-web-database-zaredark-6f70.j.aivencloud.com',
    database='lovell-web',
    port=23336
)

# ,---------------- GET ------------------,

@app.route('/users', methods=['GET'])
def getUser():
    try:
        user = db.get_user()
        if user:
            return jsonify(user), 200  # Devuelve los usuarios en formato JSON
        else:
            return jsonify({'error': 'No user found'}), 404  # No se encontraron usuarios
    except Exception as e:
        return jsonify({'error': str(e)}), 500  # Manejo de errores

@app.route('/detailsBook', methods=['GET'])
def get_book_details():
    title = request.args.get('titulo')  # Título desde los parámetros de consulta
    if not title:
        return jsonify({"error": "No title provided"}), 400

    try:
        book_details = db.get_detailsBooks(title)
        if book_details:
            return jsonify({"data": book_details}), 200
        else:
            return jsonify({"error": "Book not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500
# ,---------------- POST -----------------,

@app.route('/search', methods=['POST'])
def search_books():
    data = request.get_json()  # Obtenemos los datos de la solicitud POST
    value = data.get('search')  # Recuperamos el término de búsqueda

    if not value:
        return jsonify({"error": "Search term is required"}), 400

    try:
        books = db.get_search(value)  # Llamamos al método get_search
        return jsonify(books), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
