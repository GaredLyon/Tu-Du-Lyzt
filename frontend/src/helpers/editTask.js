import { global } from "./global"

export const editTask = async ( idTask, title, description) => {

  // console.log(idTask, title, description)

  const request = await fetch(`${global.url}task/${idTask}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      description
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // const data = await request.json()

  // console.log('Se actualizo una tarea', data)
}