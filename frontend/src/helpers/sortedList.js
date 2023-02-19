/* ES TO EN */

export const sortedList = (lista) => {

  console.log(lista)
  const sortedList = lista.sort(compareByPriority);
  // console.log(listaOrdenada);

  return sortedList || []
}

///////////////////////////////////////
function compareByPriority(a, b) {
  const priorityA = a.priority;
  const priorityB = b.priority;

  if (priorityA === 'high' && priorityB !== 'high') {
    return -1;
  }
  if (priorityB === 'high' && priorityA !== 'high') {
    return 1;
  }
  if (priorityA === 'middle' && priorityB === 'low') {
    return -1;
  }
  if (priorityA === 'low' && priorityB === 'middle') {
    return 1;
  }
  return 0;
}