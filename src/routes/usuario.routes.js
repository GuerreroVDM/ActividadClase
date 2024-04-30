//importamos dependencias
//Rutas nos conectan el front(está en el servidor) con la lógica de programacion

import express from 'express';
import { getUsuario, postUsuario, putUsuario,deleteUsuario } from '../controllers/usuario.controller.js';

//Definir una variable para nuestras rutas
const usuarioRouter = express.Router();


//Definimos nuestras rutas específicas
//Ruta para obtener usuarios
usuarioRouter.get('/obtenerUsuario',getUsuario);

//Ruta para crear usuarios
usuarioRouter.post('/crearUsuario', postUsuario);

//Ruta para modificar usuarios por su id -> identificador único
usuarioRouter.put('/modificarUsuario/:_id', putUsuario);

//Ruta para eliminar usuarios por su id
usuarioRouter.delete('/eliminarUsuario/:_id', deleteUsuario);

//Exportamos las rutas
export default usuarioRouter;