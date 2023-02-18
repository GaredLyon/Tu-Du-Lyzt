/* ES TO EN */

import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import './Aside.css'

const getIdGroup = (column) => {
  switch (column) {
    case 'Progress': return 2
    default: return 1
  }
}

////////////////////////////////////
export const Aside = () => {

  const { setGroups } = useContext(AppContext)

  //AGREGAR TAREA *******************
  const addNewtask = (e) => {

    //OBTENER TODOS LOS VALORES QUE NECESITO
    let priority = e.target.priority.value /* LISTO */
    let column = e.target.column.value /* LISTO */
    let title = e.target.inputTitle.value /* LISTO */
    let description = e.target.inputDescription.value /* LISTO */
    let idGroup = getIdGroup(column)

    if (title && description) {

      /* CREANDO AL ESTRCUTURA DE LA NUEVA TAREA */
      const newTask = {
        id: Math.floor(Math.random() * 100000),
        priority,
        content: {
          title,
          description
        },
        // fechayhora: formatearFecha(Date.now()),
        dateAndHour: Date.now(),
      }

      //AGREGAR LA TAREA VISUALMENTE A LA COLUMNA QUE CORRESPONDE
      setGroups(currentState => {

        const updatedGroups = currentState.map(group => {
          if (group.id === idGroup) {
            return {
              ...group,
              tasks: [...group.tasks, newTask]
            }
          }
          return group
        })

        // console.log(gruposActualizados[idGrupo].tareas)
        return updatedGroups
      })


      //LIMPIAR EL FORMULARIO
      e.target.reset()

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
      <form className='aside__form' onSubmit={(e) => {
        e.preventDefault()
        addNewtask(e)
      }}>

        {/* HEADER DEL FORMULARIO */}
        <header className='header__form'>
          <div>
            <select name='priority' title='Prioridad'>
              <option value='High'>Alto</option>
              <option value='Middle' selected>Medio</option>
              <option value='Low'>Bajo</option>
            </select>
            <select name='column' title='Columna'>
              <option value='Todo'>Pendientes</option>
              <option value='Progress'>Proceso</option>
            </select>
          </div>

          <div>
            {/* <button type='button' className='aside__contenedor-iconos'>
              <i className="fa-regular fa-calendar"></i>
            </button> */}
            <button type='reset'  className='aside__container-icons' title='Limpiar formulario'>
              <i className="fa-sharp fa-solid fa-trash"></i>
            </button>
          </div>

        </header>

        {/* CONTENEDOR DE TEXTO */}
        <div className='header__text'>
          <textarea
            className='header__input1'
            rows="1"
            placeholder='Titulo...'
            name='inputTitle' />
          <hr />
          <textarea
            className='header__input2'
            rows="9"
            placeholder='Descripcion...'
            name='inputDescription' />
        </div>

        <button type='submit' className='aside__button-create'>Crear</button>
      </form>
    </aside>
  )
}
