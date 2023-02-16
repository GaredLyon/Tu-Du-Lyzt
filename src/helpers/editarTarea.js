import { peticiones } from "./peticiones"

export const editarTarea = (idGrupo, idTarea, nuevoContenido) => {

  return peticiones('PUT', {
    idGrupo,
    idTarea,
    nuevoContenido
  })
}