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

# Mostrar detalles del libro a traves de detailsBook (metodo POST)
@app.route('/detailsBook/<string:titulo>', methods=['GET'])
def get_book_details(titulo):
    try:
        book_details = db.get_detailsBooks(titulo)

        if not book_details:
            return jsonify({'success': False, 'error': 'Libro no encontrado.'}), 404

        return jsonify({'success': True, 'data': book_details})

    except Exception as e:
        print(f'Error al obtener detalles del libro: {str(e)}')
        return jsonify({'success': False, 'error': 'Error interno del servidor.', 'details': str(e)}), 500

# Mostrar libro demostración en la Pantalla Principal
@app.route('/getMainBook', methods=['GET'])
def get_book_demo():
    try:
        book = db.bookDemo()
        if book:
            return jsonify(book), 200
        else:
            jsonify({'error': 'Book not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500  # Manejo de errores
    
# ,---------------- POST -----------------,

# Buscar
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

# Mostrar detalles
@app.route('/detailsBook', methods=['POST'])
def details_book():
    try:
        data = request.json
        print("Datos recibidos:", data)  # Agregar esta línea para debug
        titulo = data.get('titulo')

        if not titulo:
            return jsonify({'success': False, 'error': 'Título es requerido.'}), 400

        book_details = db.get_detailsBooks(titulo)
        if not book_details:
            return jsonify({'success': False, 'error': 'Libro no encontrado.'}), 404

        return jsonify({'success': True, 'data': book_details})

    except Exception as e:
        print(f'Error al obtener detalles del libro: {str(e)}')
        return jsonify({'success': False, 'error': 'Error interno del servidor.', 'details': str(e)}), 500


# ---------------------------------------------------------------------------------------------------

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)