import { peticiones } from "./peticiones"

export const traerListaTareas = () => {

  return peticiones('GET')
}