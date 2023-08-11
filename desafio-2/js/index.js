const iniciarLogin = () => {
  let nombreDeUsuario = obtenerDatosDelUsuario("nombre de usuario");
  let contraseña = obtenerDatosDelUsuario("contraseña");
  validarDatos(nombreDeUsuario, contraseña);
};
