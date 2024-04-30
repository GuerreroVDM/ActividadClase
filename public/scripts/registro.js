// verificar conexion con html
console.log("holaaaaa soy registro");

// crear mi funcion para registro

const registrarUsuario = async () => {

    //obtengo los datos de mi formulario
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
console.log(nombreCompleto, correo, contrasena);

//creamos un objeto con los datos del usuario

const datosUsuario = {

    nombreCompleto,
    correo,
    contrasena
}
console.log(datosUsuario);

//se debe hacer la peticion post para crear usuario en nuestra BD con manejo de error

try{

    const respuesta = await fetch("http://localhost:9000/api/crearUsuario",
    {
        method: "POST",
        headers:{"Content-Type": "application/json"},
    
    body: JSON.stringify(datosUsuario)
    }
    );

    const nuevoUsuario = await respuesta.json();
console.log("Usuario creado exitosamente", nuevoUsuario);

//realizamos un condicional para redireccionar a ingreso.html
if(nuevoUsuario){
    alert("Registro exitoso!");

    //preguntar no es claro de donde sale ese pages
    window.location.href = "./ingreso.html"
    } else{
alert("ups! error de registro, inténtelo de nuevo");    
}

}catch(error){
console.error("Error al registrar su usuario", error)

}
}