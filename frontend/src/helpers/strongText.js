export const strongText = (texto, busqueda) => {

  let result = texto.replace(busqueda, '<b>' + busqueda + '</b>')

  console.log(result)

  return result;
}