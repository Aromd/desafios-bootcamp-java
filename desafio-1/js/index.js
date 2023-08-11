const iniciarCalculo = () => {
  let costosFijos = obtenerDatosDelUsuario("costos fijos");
  let costosVariables = obtenerDatosDelUsuario("costos variables");
  let precioDeVenta = obtenerDatosDelUsuario("precio de venta");
  calcularPuntoDeEquilibrio(costosFijos, costosVariables, precioDeVenta);
};
