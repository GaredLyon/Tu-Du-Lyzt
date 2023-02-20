import { global } from "./global"

export const addTask = async ( title, description, priority, state) => {

  // console.log(title, description, priority, state)

  const request = await fetch(`${global.url}task`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      description,
      priority,
      state,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await request.json()

  // console.log('se agrego una nueva tarea', data)

  return data.task
}