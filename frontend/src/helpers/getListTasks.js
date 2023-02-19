import { httpRequests } from "./httpRequests"

export const getListTasks = async () => {

  //AQUI EL SERVIDOR DEBE DE DEVOLMERME UN ARRAY DE OBJETOS
  let list = await httpRequests('GET')
  
  return list
}