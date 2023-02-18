/* ES TO EN */

export const sortedList = (lista) => {

  const sortedList = lista.sort(compareByPriority);
  // console.log(listaOrdenada);

  return sortedList
}

///////////////////////////////////////
function compareByPriority(a, b) {
  const priorityA = a.priority;
  const priorityB = b.priority;

  if (priorityA === 'High' && priorityB !== 'High') {
    return -1;
  }
  if (priorityB === 'High' && priorityA !== 'High') {
    return 1;
  }
  if (priorityA === 'Middle' && priorityB === 'Low') {
    return -1;
  }
  if (priorityA === 'Low' && priorityB === 'Middle') {
    return 1;
  }
  return 0;
}