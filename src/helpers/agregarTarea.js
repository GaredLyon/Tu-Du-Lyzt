import { peticiones } from "./peticiones"

export const agregarTarea = async (idGrupo, dificultad, cuerpo) => {

  console.log(idGrupo, dificultad, cuerpo)

  //COMENTADO LAS LINEAS DE ABAJO PORQUE AUN NO TENEMOS SERVIDOR

  // return await peticiones('GET', {idGrupo, dificultad, cuerpo})

  console.log('se agrego una nueva tarea')
}