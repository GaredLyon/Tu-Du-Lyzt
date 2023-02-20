import { global } from "./global"
import { sortedList } from "./sortedList"

export const search = async(busqueda) => {

  let data

  //SI LA LONGITUD DE LAS BUSQUEDA ES MAYOR O 1, SE HACE LA BUSQUEDA
  if (busqueda.length >= 1) {
    const peticion = await fetch(`${global.url}search/${busqueda}`)
    data = await peticion.json()

  //EN EL CASO QUE EL INUT ESTE VACIO, DEVOLVER TODA LA LISTA
  } else {
    const peticion = await fetch(`${global.url}task`)
    data = await peticion.json()
  }

  //CLASIFICAR LAS TAREAS
  let pending = []
  let process = []
  let completed = []

  data.tasks.map(task => {

    if (task.state === 'pendient') pending = [...pending, task]
    if (task.state === 'progress') process = [...process, task]
    if (task.state === 'completed') completed = [...completed, task]

  })

  return [sortedList(pending), sortedList(process), sortedList(completed)]

}