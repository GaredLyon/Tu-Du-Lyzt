import React, { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import { formatearFecha } from '../../helpers/formatearFecha'
// import { agregarTarea } from '../../helpers/agregartarea'
import './Aside.css'

const obtenerIdGrupo = (columna) => {
  switch (columna) {
    case 'Progress': return 2
    default: return 1
  }
}

////////////////////////////////////
export const Aside = () => {

  const { setGrupos } = useContext(AppContext)

  //AGREGAR TAREA *******************
  const agregarNuevaTarea = (evento) => {

    //OBTENER TODOS LOS VALORES QUE NECESITO
    let dificultad = evento.target.dificultad.value /* LISTO */
    let columna = evento.target.columna.value /* LISTO */
    let inputTitulo = evento.target.inputTitulo.value /* LISTO */
    let inputDescripcion = evento.target.inputDescripcion.value /* LISTO */
    let idGrupo = obtenerIdGrupo(columna)

    if (inputTitulo && inputDescripcion) {

      // const fecha = new Date();
      // const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
      // const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

      /* CREANDO AL ESTRCUTURA DE LA NUEVA TAREA */
      const nuevaTarea = {
        id: Math.floor(Math.random() * 100000),
        nivel: dificultad,
        contenido: {
          titulo: inputTitulo,
          descripcion: inputDescripcion
        },
        // fechayhora: formatearFecha(Date.now()),
        fechayhora: Date.now(),
      }

      //AGREGAR LA TAREA VISUALMENTE A LA COLUMNA QUE CORRESPONDE
      setGrupos(estadoActual => {
        const gruposActualizados = estadoActual.map(grupo => {
          if (grupo.id === idGrupo) {
            return {
              ...grupo,
              tareas: [...grupo.tareas, nuevaTarea]
            }
          }
          return grupo
        })

        // console.log(gruposActualizados[idGrupo].tareas)
        return gruposActualizados
      })


      //LIMPIAR EL FORMULARIO
      // evento.target.reset()

      //AGREGAR UNA NUEVA TAREA AL SERVIDOR, USANDO EL HELPER
      // agregarTarea({
      //   idGrupo,
      //   dificultad,
      //   cuerpo: {
      //     columna, inputTitulo, inputDescripcion
      //   }
      // })
    }
  }


  //////////////////////////////
  return (
    <aside className='aside'>
      <h3 className='aside__title'>Tu-Du Lyzt</h3>
      <form className='aside__form' onSubmit={(evento) => {
        evento.preventDefault()
        agregarNuevaTarea(evento)
      }}>

        {/* HEADER DEL FORMULARIO */}
        <header className='header__formulario'>
          <div>
            <select name='dificultad'>
              <option>Low</option>
              <option>Middle</option>
              <option>High</option>
            </select>
            <select name='columna'>
              <option>Todo</option>
              <option>Progress</option>
            </select>
          </div>

          <div>
            {/* <button type='button' className='aside__contenedor-iconos'>
              <i className="fa-regular fa-calendar"></i>
            </button> */}
            <button type='reset'  className='aside__contenedor-iconos' >
              <i className="fa-sharp fa-solid fa-trash"></i>
            </button>
          </div>

        </header>

        {/* CONTENEDOR DE TEXTO */}
        <div className='header__texto'>
          <textarea
            className='header__input1'
            rows="1"
            placeholder='Titulo...'
            name='inputTitulo' />
          <hr />
          <textarea
            className='header__input2'
            rows="9"
            placeholder='Descripcion...'
            name='inputDescripcion' />
        </div>

        <button type='submit' className='aside__boton-crear'>Create</button>
      </form>
    </aside>
  )
}
