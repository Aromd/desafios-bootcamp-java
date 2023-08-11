const obtenerDatosDelUsuario = (datoARecuperar) => {
    
    do {
        respuesta = Number(prompt(`Ingrese ${datoARecuperar} del producto`));
    } while (!respuesta);

    return respuesta;
};

const calcularPuntoDeEquilibrio = (costosFijos, costosVariables, precioDeVenta) => {
    let puntoDeEquilibrio = costosFijos / (precioDeVenta - costosVariables);
    alert("El punto de equilibrio es de: " + puntoDeEquilibrio + " ventas");
};
