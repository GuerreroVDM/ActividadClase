//. importar las dependencias que vamos a usar:
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import conexionMongo from './src/config/baseDatos.js';

//.Ahora configuramos el servidor
const app = express();
const puerto = 9000;

//.cofiguramos variable de  entorno
dotenv.config();

//Establecer la conexion con nuestro front
conexionMongo();

const rutaPublica = path.join(process.cwd(),'public');
app.use(express.static(rutaPublica));
app.use(express.json());

//.especificamos que vamos a acceder a nuestro index.html
app.get('/', (req,res) => {
    res.sendFile(path.join(rutaPublica,'index.html'))
});

//. inicializar el servidor
app.listen(puerto, () => {
    console.log(`el servidor está escuchando en http//:localhost:${puerto}`); 
});



