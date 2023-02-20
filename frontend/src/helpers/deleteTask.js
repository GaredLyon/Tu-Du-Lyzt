import { global } from "./global"

export const deleteTasks = async (idTask) => {
  // console.log(idTasks)

  const request = await fetch(`${global.url}task/${idTask}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // const data = await request.json()

  // console.log('se elimino una tarea', data)
}

