const obtenerDatosDelUsuario = (datoARecuperar) => {

    let respuesta;
    
    do {
        respuesta = prompt(`Ingresar ${datoARecuperar}`);
    } while (!respuesta);

    return respuesta;
};


const validarDatos = (nombreDeUsuario, contraseña) => {
    
    let mensaje;
    let sonCredencialesValidas = nombreDeUsuario == "admin" && contraseña == "1234";

    mensaje = sonCredencialesValidas
    ? "¡Bienvenido, podes ingresar!" 
    : "Error. Usuario o contraseña incorrectos";

    alert(mensaje);
};
