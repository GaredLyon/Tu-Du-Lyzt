import { peticiones } from "./peticiones"

export const agregarTarea = async (idGrupo, nivel, contenido) => {

  return peticiones('GET', {idGrupo, nivel, contenido})
}