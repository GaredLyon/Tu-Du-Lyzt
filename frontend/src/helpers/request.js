import { global } from "./global"

export const request = async( tipoMetodo, cuerpo) => {

  let opciones = {
    method: 'GET'
  }

  ///////////////////////////////
  if (tipoMetodo === 'GET' || tipoMetodo === 'DELETE') {
    opciones = {
      method: tipoMetodo
    }
  }

  if (tipoMetodo === 'POST' || tipoMetodo === 'PUT') {
    opciones = {
      method: tipoMetodo,
      body: JSON.stringify(cuerpo),
      headers: {
        'Content-Type': 'aplication/json'
      }
    }
  }

  ///////////////////////////////////
  let url = `${global.url}task`

  try {
    const peticion =  await fetch(url)
    const data = peticion.json()

    return data
    
  } catch (error) {
    console.log(error)

    return []
  }

  ///////////////////////////////////
}
