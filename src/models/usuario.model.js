//importar las dependencias que necesitamos utilizar
import mongoose from 'mongoose';

//creamos el esquema- plantilla
const schema = mongoose.Schema;

//ahora creamos nuestro esquema de datos que es lo que se va a guardar en nuestra BD (estructura)
const usuarioSchema = new schema({
    nombreCompleto:{
        type: String, 
        required: true
    },
        correo:{
        type: String,
        required: true
    },
        contrasena:{
            type: String,
            required: true
    }

});
// quiero enviar mi plantilla schema a mi base de datos
//debo crear un modelo

const usuarioModel = mongoose.model('usuario',usuarioSchema);

//por ultimo se exporta mi modelo 
export default usuarioModel;
