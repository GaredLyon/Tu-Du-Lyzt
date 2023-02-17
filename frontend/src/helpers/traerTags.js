export const traerTags = (grupos) => {
  
  let titulos = []

  grupos.map(grupo => {

    grupo.tareas.map(tarea => {
      titulos = [...titulos, tarea.contenido.titulo]
    })

  })

  //ELIMINAR ELEMENTOS REPETIDOS
  let titulosSinRepetir = [...new Set(titulos)];

  return titulosSinRepetir
  // return ["design", "code", "managment", "slicing"];
} 