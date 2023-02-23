import { global } from "./global"

export const moveTask = async ( idTask, state) => {

  // console.log(idTask)
  // console.log(state)

  const request = await fetch(`${global.url}move/${idTask}`, {
    method: 'PUT',
    body: JSON.stringify({
      state,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await request.json()

  // console.log('Se movio la tarea', data)

  return data
}
