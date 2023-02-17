import { peticiones } from "./peticiones"

export const traerListaTareas = async () => {

  //AQUI EL SERVIDOR DEBE DE DEVOLMERME UN ARRAY DE OBJETOS

  return await peticiones('GET')
}