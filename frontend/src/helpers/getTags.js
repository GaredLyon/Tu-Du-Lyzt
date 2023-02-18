/* ES TO EN */
export const getTags = (groups) => {
  
  let titles = []

  groups.map(group => {

    group.tasks.map(task => {
      titles = [...titles, task.content.title]
    })

  })

  //ELIMINAR ELEMENTOS REPETIDOS
  let titulosSinRepetir = [...new Set(titles)];

  //ORDENARLOS ALFABETICAMENTE
  let ordenados = titulosSinRepetir.sort()

  return ordenados
  // return ["design", "code", "managment", "slicing"];
} 