import { global } from "./global"
import { sortedList } from "./sortedList"

export const getListTasks = async () => {

  const peticion = await fetch(`${global.url}traer_tareas`)
  const data = await peticion.json()

  // console.log(data.tareas)
  //1. clasificar las tareas en 3 columnas(Pendientes, proceso, completados)

  let pending = []
  let process = []
  let completed = []

  data.tasks.map(task => {

    if (task.state === 'pendient') pending = [...pending, task]
    if (task.state === 'progress') process = [...process, task]
    if (task.state === 'completed') completed = [...completed, task]

  })

  //2. ordenar cada lista por prioridad y devolver el resultados
  return [sortedList(pending), sortedList(process), sortedList(completed)]
}
