const obtenerDatosDelUsuario = (datoARecuperar) => {

    let respuesta;
    
    do {
        respuesta = Number(prompt(`Inserte el ${datoARecuperar} :`));
    } while (!respuesta);

    return respuesta;
};

const calcularPresupuesto = (ingresoTotal) => {
    let gastosNecesarios = ingresoTotal * (50 / 100);
    let gastosOpcionales = ingresoTotal * (30 / 100);
    let ahorroInversion = ingresoTotal * (20 / 100);

    alert(`
    gastos necesarios: ${gastosNecesarios}
    gastos opcionales: ${gastosOpcionales}
    ahorro e inversion: ${ahorroInversion}
    `);
};
