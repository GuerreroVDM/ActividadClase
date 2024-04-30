
//importamos dependencias de lo que se necesita para el funcionamiento del código
import usuarioModel from '../models/usuario.model.js';


//crear lógica de las peticiones get-muestra mi usuario, post-crear usuario, put- modificar usuarios y delete- elimina usuarios


//prueba inicial--- lógica para mostrar usuarios
export const getUsuario = async(req, res) =>{   
    //vamos a manejar errores con TRY y CATCH- condicional

    try{
        let usuarios = await usuarioModel.find();
        return res.send(usuarios);
    }catch(error){
        return res.json({error: "error al mostrar los datos" + error});

    }
}

//lógica para crear usuario
export const postUsuario = async(req, res) =>{

    try{
        let datosUsuario = req.body;
        let nuevoUsuario = await usuarioModel.create(datosUsuario);
        return res.json(nuevoUsuario);

        //esto e spara que me envie un menssaje que me muestre cual es el error
    }catch(error){
        return res.json({error: "error al crear el usuario", message: error.message});
}
}

//logica para modificar usuarios 
export const putUsuario = async(req, res) =>{
    //LÓGICA PARA MODIFICAR USUARIOS POR ID
    try{
        let datosModificar = req.body;
        let idModificar = req.params._id;

        await usuarioModel.findByIdAndUpdate(idModificar,datosModificar);
        return res.json({message:"Usuario actualizado correctamente"});

    }catch(error){
        return res.json({error: "error al modificar usuario", message:error.message});
    }
}


//lógica para eliminar usuario
export const deleteUsuario = async(req, res) =>{
    
    //LÓGICA PARA ELIMINAR USUARIOS POR ID
    try{
        let idEliminar = req.params._id;
        let usuarioEliminado = await usuarioModel.findByIdAndDelete(idEliminar);

        if(usuarioEliminado){
            return res.json({message: "Usuario eliminado correctamente"});
        } else{
            return res.json({message: "Ups! no se pudo eliminar ese usuario"});
        }

    }catch(error){
        return res.json({error: "error al eliminar usuario", message:error.message});
    }
}


