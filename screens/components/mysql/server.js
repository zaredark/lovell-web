// import express from 'express';
// import mysql from 'mysql';

// const app = express();
// const port = 3306; // Define el puerto

// app.use(express.json());

// // Conexión a la base de datos
// const db = mysql.createConnection({
//   host: 'sql210.infinityfree.com',
//   user: 'if0_37435271',
//   password: 'DDLv5NkajAu3zxF',
//   database: 'if0_37435271_lovell_web'
// });

// // Manejar errores al conectar
// db.connect(err => {
//   if (err) {
//     console.error('Error al conectar con la base de datos:', err);
//     return;
//   }
//   console.log('Conectado a la base de datos.');
// });

// // Función para obtener usuarios
// const getUsers = (req, res) => {
//   db.query('SELECT username, nickname FROM usuarios', (err, results) => {
//     if (err) {
//       console.error('Error al obtener los datos:', err);
//       res.status(500).send('Error en el servidor');
//       return;
//     }
//     res.json(results); // Enviar los resultados como JSON
//   });
// };

// // Rutas
// app.get('/users', getUsers);

// // Iniciar el servidor
// app.listen(port, () => {
//   console.log(`Servidor corriendo en http://localhost:${port}`);
// });