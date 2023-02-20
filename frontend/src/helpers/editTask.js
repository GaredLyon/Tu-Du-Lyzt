import { global } from "./global"

export const editTask = async ( idTask, title, description) => {

  // console.log(idTask, title, description)

  const peticion = await fetch(`${global.url}task/${idTask}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      description
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // const data = await peticion.json()

  // console.log('Se actualizo una tarea', data)
}