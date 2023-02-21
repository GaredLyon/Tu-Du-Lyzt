import React, { useContext, useState } from 'react'
import './Card.css'
import { formatDate } from '../../../helpers/formatDate'
import { formatHour } from '../../../helpers/formatHour'
import { deleteTasks } from '../../../helpers/deleteTask'
import { editTask } from '../../../helpers/editTask'
import { AppContext } from '../../../context/AppContext'
import { moveTask } from '../../../helpers/movetask'

//obtener el color
const getColor = (priority) => {
  switch (priority) {
    case 'high': return 'red'
    case 'middle': return 'yellow'
    default: return 'blue'
  }
}

///////////////////////////////////////////////////
export const Card = ({ task }) => {

  const { _id, priority, title, description, state } = task
  const [cardEditable, setCardEditable] = useState(1) // 1 no editable - 0 editable
  // const [cardVisible, setCardVisible] = useState(true)

  const { getData, typeCards, busqueda, setBusqueda } = useContext(AppContext)

  //PARA MOSTARA EL TIEMPO TRANSCURRIDO
  const [timeElapsed, setTimeElapsed] = useState(true)

  setTimeout(() => {
    let result = formatHour(task.date)
    setTimeElapsed(result)
  }, 1000);


  //EDITAR TAREA ******************************************************
  const solicitarCambio = (idTask) => {

    const title = document.getElementById(`input1-task${idTask}`).value
    const description = document.getElementById(`input2-task${idTask}`).value

    editTask(idTask, title, description)
  }

  const solicitarEliminar = async () => {
    setVentanaCargando(true)

    await deleteTasks(_id)
    getData()
    // setCardVisible(!cardVisible)
  }

  const solicitarMover = async (id, state) => {
    setVentanaMoviendo(true)

    let respuesta = await moveTask(id, state)

    // console.log(respuesta)

    if (respuesta.status) {
      getData()
    }
  }

  //CONFIRMACION PARA ELIMINAR TAREA********************************* */
  const [ventanaEliminar, setVentanaEliminar] = useState(false)
  const [ventanaCargando, setVentanaCargando] = useState(false)
  const [ventanaMover, setVentanaMover] = useState(false)
  const [ventanaMoviendo, setVentanaMoviendo] = useState(false)

  //////////////////////////////////
  return (
    <article className={`card ${`card--${getColor(priority)}`} ${(typeCards === 'all' || typeCards === priority) && 'card--visible'}`}>
      <>
        {/* CARD MAIN */}
        <main className='card__main'>
          <textarea
            id={`input1-task${_id}`}
            className='card__title'
            defaultValue={title}
            disabled={cardEditable}
            maxLength={12}
            rows="1"
          />
          <textarea
            id={`input2-task${_id}`}
            className='card__container'
            defaultValue={description}
            disabled={cardEditable}
          />
        </main>

        {/* CARD ASIDE */}
        <aside className='card__aside'>
          <section className='card__icon-container'>
            {/* ICONO TACHO */}
            <i
              className="fa-sharp fa-solid fa-trash card__icon"
              title='Eliminar tarea'
              // onClick={() => solicitarEliminar(_id)}
              onClick={() => setVentanaEliminar(true)}
            ></i>
            {
              cardEditable ? (
                /* ICONO LAPIZ */
                <i
                  className="fa-solid fa-pencil card__icon"
                  title='Editar tarea'
                  onClick={() => setCardEditable(!cardEditable)}>
                </i>
              ) : (
                /* ICONO GUARDAR */
                <i
                  className="fa-solid fa-floppy-disk card__icon"
                  title='Guardar tarea'
                  onClick={() => {
                    solicitarCambio(_id)
                    setCardEditable(!cardEditable)
                  }}>
                </i>
              )
            }

            <div className='caja__icon'>
              {/* ICONO DE RELOJ */}
              <i className={`fa-solid fa-clock card__icon`} title='Hace cuanto atras fue creado'></i>
              <div className='card__alert'>{timeElapsed}</div>
              <div className='card__alert'>{ }</div>
            </div>

            <div className='caja__icon'>
              {/* ICONO DE CALENDARIO */}
              <i className={`fa-solid fa-calendar card__icon`} title='Fecha de creacion'></i>
              <div className='card__alert'>{formatDate(task.date)}</div>
            </div>

          </section>
          <section className='card__icon-container'>
            {/* ICONO ATRAS */}
            <i className="fa-solid fa-up-down-left-right card__icon" onClick={() => setVentanaMover(true)}></i>
          </section>
        </aside>
      </>


      {
        ventanaEliminar && (
          <article className='card-alert'>
            <h4 className='card-alert__title'>¿Estas seguro que quieres Eliminar?</h4>
            <div className='card-alert__container-button'>
              <button onClick={() => solicitarEliminar(_id)}>Confirmar</button>
              <button onClick={() => setVentanaEliminar(false)}>Cancelar</button>
            </div>
          </article>
        )
      }

      {
        ventanaMover && (
          <article className='card-alert'>
            <i className="fa-solid fa-xmark mover__icono-cerrar" onClick={() => setVentanaMover(false)}></i>
            <h4 className='card-alert__title'>¿A donde los quieres mover?</h4>
            <div className='card-alert__container-button'>
              {state !== 'pendient' && (<button className='button-pendient' onClick={() => solicitarMover(_id, 'pendient')}>Pendiente</button>)}
              {state !== 'progress' && (<button className='button-process' onClick={() => solicitarMover(_id, 'progress')}>Proceso</button>)}
              {state !== 'completed' && (<button className='button-completed' onClick={() => solicitarMover(_id, 'completed')}>Completado</button>)}
            </div>
          </article>
        )
      }

      {
        ventanaCargando && (
          <article className='card-alert card-alert--cargando'>
            <div className='icono-cargando'></div>
            <p>Eliminando</p>
          </article>
        )
      }

      {
        ventanaMoviendo && (
          <article className='card-alert card-alert--cargando'>
            <div className='icono-cargando'></div>
            <p>Moviendo</p>
          </article>
        )
      }

    </article>

  )
}

