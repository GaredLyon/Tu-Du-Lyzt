import { peticiones } from "./peticiones"

export const eliminartarea = (idGrupo, idTarea) => {

  return peticiones('DELETE', {
    idGrupo,
    idTarea
  })
}

