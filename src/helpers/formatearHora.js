export const formatearHora = (fechaGuardada) => {
  const fechaInicio = new Date(fechaGuardada);

  // Calcular la diferencia en milisegundos entre la fecha de inicio y la fecha actual
  const diffMilisegundos = Date.now() - fechaInicio.getTime();

  // Convertir la diferencia en milisegundos a horas y minutos
  const diffHoras = Math.floor(diffMilisegundos / (1000 * 60 * 60));
  const diffMinutos = Math.floor((diffMilisegundos / (1000 * 60)) % 60);
  const diffSegundos = Math.floor((diffMilisegundos / 1000) % 60);

  // Crear una cadena de tiempo transcurrido formateada
  
  if (diffHoras >= 1 )
    return `hace ${diffHoras} hrs, ${diffMinutos} min y ${diffSegundos} s`;

  else if (diffMinutos >= 1) {
    return `Hace ${diffMinutos} min y ${diffSegundos} seg`
    
  } else{
    return `Hace ${diffSegundos} seg`
  }

}