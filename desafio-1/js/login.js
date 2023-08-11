const obtenerDatosDelUsuario = (datoARecuperar) => {

    let respuesta;
    
    do {
        respuesta = Number(prompt(`Ingresar ${datoARecuperar}`));
    } while (!respuesta);

    return respuesta;
};

const validarDatos = (edadDelUsuario) => {
    
    if(edadDelUsuario < 2 || edadDelUsuario > 115){
        alert('Error. Ingresá tu edad real');
        return;
    }

    let esMayor = edadDelUsuario >= 18;
    let mensaje = esMayor
    ? "¡Bienvenido, podes ingresar!" 
    : "Error. Necesitas ser mayor de 18 años para poder ingresar :(";

    alert(mensaje);
};
