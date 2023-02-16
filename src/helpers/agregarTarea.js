import { peticiones } from "./peticiones"

export const agregarTarea = async (cuerpo) => {

  return peticiones('GET', cuerpo)
}