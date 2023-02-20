import { global } from "./global"

export const deleteTasks = async (idTask) => {
  // console.log(idTasks)

  const peticion = await fetch(`${global.url}task/${idTask}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // const data = await peticion.json()

  // console.log('se elimino una tarea', data)
}

