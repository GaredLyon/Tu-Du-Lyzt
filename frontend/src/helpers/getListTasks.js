import { global } from "./global"
import { sortedList } from "./sortedList"

export const getListTasks = async () => {

  const peticion = await fetch(`${global.url}traer_tareas`)
  const data = await peticion.json()

  // console.log(data.tareas)
  //1. dividir las tareas en 3 columnas(Pendientes, proceso, completados)

  let pendientes = []
  let proceso = []
  let completadas = []

  data.tareas.map(tarea => {

    if (tarea.state === 'pendient') pendientes = [...pendientes, tarea]
    if (tarea.state === 'progress') proceso = [...proceso, tarea]
    if (tarea.state === 'completed') completadas = [...completadas, tarea]

  })

  // lista
  // console.log(pendientes, proceso, completadas)

  return [sortedList(pendientes), sortedList(proceso), sortedList(completadas)]
}
