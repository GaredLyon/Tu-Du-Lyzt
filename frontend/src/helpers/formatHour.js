export const formatHour = (fechaGuardada) => {
  const dateStart = new Date(fechaGuardada);

  // Calcular la diferencia en milisegundos entre la fecha de inicio y la fecha actual
  const diffMilliseconds = Date.now() - dateStart.getTime();

  // Convertir la diferencia en milisegundos a horas y minutos
  const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMilliseconds / (1000 * 60)) % 60);
  const diffSeconds = Math.floor((diffMilliseconds / 1000) % 60);

  // Crear una cadena de tiempo transcurrido formateada
  
  if (diffHours >= 1 )
    return `Hace ${diffHours} hrs, ${diffMinutes} min y ${diffSeconds} s`;

  else if (diffMinutes >= 1) {
    return `Hace ${diffMinutes} min y ${diffSeconds} seg`
    
  } else{
    return `Hace ${diffSeconds} seg`
  }

}