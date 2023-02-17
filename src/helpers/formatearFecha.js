export const formatearFecha = (fechaGuardada) =>{
  const fecha = new Date(fechaGuardada);
  const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
  const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

  return fechaFormateada
}