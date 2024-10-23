import mysql.connector
from mysql.connector import errorcode
import sys

class DataBaseLovellWeb:
    def __init__(self, user, passw, host, port, database):
        self.user = user
        self.passw = passw
        self.host = host
        self.port = port
        self.database = database
        self.con = None
        self.cursor = None

    # Método para conectar a la base de datos 
    def connect(self):
        try:
            self.con = mysql.connector.connect(
                user=self.user,
                password=self.passw,
                host=self.host,
                database=self.database,
                port=self.port
            )
            self.cursor = self.con.cursor(dictionary=True)  # Usar diccionario para resultados
            print("Conexión exitosa a la base de datos.")

        except mysql.connector.Error as err:
            if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
                print("Error: Acceso denegado, verifica tus credenciales.")
                sys.exit()
            elif err.errno == errorcode.ER_BAD_DB_ERROR:
                print("Error: La base de datos no existe.")
                sys.exit()
            else:
                print(f"Error: {err}")
                sys.exit()

    # Método para desconectar la base de datos 
    def disconnect(self):
        if self.cursor:
            self.cursor.close()
        if self.con:
            self.con.close()
        print("Conexión cerrada.")

    # Método para obtener un usuario
    def get_user(self):
        self.connect()
        query = 'SELECT username, nickname, bio FROM usuarios LIMIT 1;'
        self.cursor.execute(query)
        
        result = self.cursor.fetchone()
        user = result if result else None  # Validar directamente si hay resultado
    
        self.disconnect()
        return user  # Retornar el usuario completo como diccionario
    
    # consulta para la busqueda de libros
    def get_search(self, value):
        self.connect()
        query = f'''
            SELECT 
                titulo,
                sipnosis,
                cant_capitulos,
                maduro,
                completo,
                portada
            FROM
                libros
            WHERE
                titulo LIKE %s or
                categorias LIKE %s or
                etiquetas LIKE %s
        '''
        
        # Formateo del termino de busqueda
        search_placeholder = f"%{value}%"
        self.cursor.execute(query, (search_placeholder, search_placeholder, search_placeholder))

        result = self.cursor.fetchall()
        self.disconnect()
        return result
    
    # Metodo para mostrar detalles del libro
    def get_detailsBooks(self, valueTitle):
        self.connect()
        query = '''
            SELECT 
                libros.titulo,
                usuarios.username,
                usuarios.icon_user,
                libros.sipnosis,
                libros.cant_capitulos,
                libros.maduro,
                libros.completo,
                libros.portada
            FROM
                libros
            INNER JOIN
                usuarios
            ON
                libros.autor = usuarios.id_user
            WHERE
                libros.titulo = %s
        '''

        self.cursor.execute(query, (valueTitle, ))

        result = self.cursor.fetchone()
        self.disconnect()
        return result

    def bookDemo (self):
        self.connect()
        query = f'''
            SELECT 
                titulo,
                sipnosis,
                cant_capitulos,
                maduro,
                completo,
                portada
            FROM
                libros
            WHERE
                titulo LIKE "Maliss QUEEN RED RANSOM - Yu-Gi-Oh!"
        '''
        self.cursor.execute(query)

        result = self.cursor.fetchall()
        self.disconnect()
        return result