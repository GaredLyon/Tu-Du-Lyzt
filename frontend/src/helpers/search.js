import { global } from "./global"

export const search = async(busqueda) => {

  const peticion = await fetch(`${global}search/${busqueda}`)


  return ''
}