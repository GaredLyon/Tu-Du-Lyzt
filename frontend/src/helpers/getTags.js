/* ES TO EN */
export const getTags = (groups) => {
  
  // console.log(groups)

  let titles = []

  groups.map(group => {

    // console.log(group)

    group && group.map(task => {

        // console.log(task.title)
        titles = [...titles, task.title]
    })
  })

  // //ELIMINAR ELEMENTOS REPETIDOS
  let titulosSinRepetir = [...new Set(titles)];

  // //ORDENARLOS ALFABETICAMENTE
  let ordenados = titulosSinRepetir.sort()

  // console.log(ordenados)

  return ordenados
} 