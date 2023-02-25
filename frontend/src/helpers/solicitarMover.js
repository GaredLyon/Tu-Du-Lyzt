import { moveTask } from "./movetask"
export const solicitarMover = async (id, state) => {
    //setVentanaMoviendo(true)

    let respuesta = await moveTask(id, state)

    // console.log(respuesta)

    /*if (respuesta.status) {
      getData()
    }*/

    return respuesta;
}

