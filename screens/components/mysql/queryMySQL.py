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
                titulo LIKE "%{value}%" or
                categorias LIKE "%{value}%" or
                etiquetas LIKE "%{value}%"
        '''
        
        self.cursor.execute(query)

        result = self.cursor.fetchall()
        self.disconnect()
        return result