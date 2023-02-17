export const ordenarLista = (lista) => {

  const listaOrdenada = lista.sort(compararPorPrioridad);
  // console.log(listaOrdenada);

  return listaOrdenada
}

///////////////////////////////////////
function compararPorPrioridad(a, b) {
  const prioridadA = a.nivel;
  const prioridadB = b.nivel;

  if (prioridadA === 'High' && prioridadB !== 'High') {
    return -1;
  }
  if (prioridadB === 'High' && prioridadA !== 'High') {
    return 1;
  }
  if (prioridadA === 'Middle' && prioridadB === 'Low') {
    return -1;
  }
  if (prioridadA === 'Low' && prioridadB === 'Middle') {
    return 1;
  }
  return 0;
}