export const traerTags = (grupos) => {
  
  let titulos = []

  grupos.map(grupo => {

    grupo.tareas.map(tarea => {
      titulos = [...titulos, tarea.contenido.titulo]
    })

  })

  //ELIMINAR ELEMENTOS REPETIDOS
  let titulosSinRepetir = [...new Set(titulos)];

  //ORDENARLOS ALFABETICAMENTE
  let ordenados = titulosSinRepetir.sort()

  return ordenados
  // return ["design", "code", "managment", "slicing"];
} 