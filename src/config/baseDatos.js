//Importamos las dependencias que necesitamos
import mongoose from 'mongoose';

//creamos una funcion que nos conecte la BD
const conexionMongo = async() =>{

    await mongoose.connect(process.env.BD_URL,{})

    //control de errores con try y catch (es como un condicional con los errores)
    try{
        console.log('conexion exitosa');
    }
    catch(error){
        console.log('error de conexion:', error.message);
    }

}
// se debe exportar nuestra función para llamarla desde nuestro servidor
export default  conexionMongo;

