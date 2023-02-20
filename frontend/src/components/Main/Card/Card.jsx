import React, { useContext, useState } from 'react'
import './Card.css'
import { AppContext } from '../../../context/AppContext'
import { formatDate } from '../../../helpers/formatDate'
import { formatHour } from '../../../helpers/formatHour'

//obtener el color
const getColor = (priority) => {
  switch (priority) {
    case 'high': return 'red'
    case 'middle': return 'yellow'
    default: return 'blue'
  }
}

///////////////////////////////////////////////////
export const Card = ({idGroup=1 , task}) => {

  const {id, priority, title, description} = task
  const [cardEditable, setCardEditable] = useState(1) // 1 no editable - 0 editable
  
  //PARA MOSTARA EL TIEMPO TRANSCURRIDO
  const [timeElapsed, setTimeElapsed] = useState()

  setTimeout(() => {
    let result = formatHour(task.date)
    setTimeElapsed(result)
  }, 1000);


  //EDITAR TAREA ******************************************************
  const editCurrentTask = ( idGrupo) => {

    const title = document.getElementById(`input1-task${id}`).value
    const description = document.getElementById(`input2-task${id}`).value
    
    setGroups(currentState => {
      
      const updatedGroups = currentState.map(group => {
        if (group.id === idGrupo) {

          let updatedTasks = group.tasks.map(task => {
            task.title = title
            task.description = description

            return task
          })

          return {
            ...group,
            tasks: [...updatedTasks]
          }
        }
        return group
      })

      return updatedGroups
    })

  }

  //ELIMINAR TAREA ****************************************************
  const {setGroups} = useContext(AppContext)

  const deleteCurrentTask = (idGroup, idTask) => {

    setGroups(currentState => {
      
      const updatedGroups = currentState.map(group => {
        if (group.id === idGroup) {

          let newList = group.tasks.filter(task => task.id !== idTask)

          return {
            ...group,
            tasks: [...newList]
          }
        }
        return group
      })

      return updatedGroups
    })

  }

  //////////////////////////////////
  return (
    <article className={`card ${`card--${getColor(priority)}`}`} draggable>
      
      {/* CARD MAIN */}
      <main className='card__main'>
        <textarea
          id={`input1-task${id}`}
          className='card__title'
          defaultValue={title}
          disabled={cardEditable}
          maxLength={20}
          rows="1" />
        <textarea
          id={`input2-task${id}`}
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
            onClick={() => deleteCurrentTask(idGroup, id)}></i>
          {
            cardEditable ? (
              /* ICONO LAPIZ */
              <i
                className="fa-solid fa-pencil card__icon"
                title='Editar tarea'
                onClick={()=>setCardEditable(!cardEditable)}>
              </i>
            ): (
              /* ICONO GUARDAR */
              <i
                className="fa-solid fa-floppy-disk card__icon"
                title='Guardar tarea'
                onClick={()=>{
                  editCurrentTask(idGroup, id)
                  setCardEditable(!cardEditable)
                }}>
              </i>
            )
          }

          <div className='caja__icon'>
            {/* ICONO DE RELOJ */}
            <i className={`fa-solid fa-clock card__icon`} title='Hace cuanto atras fue creado'></i>
            <div className='card__alert'>{timeElapsed}</div>
            <div className='card__alert'>{}</div>
          </div>

          <div className='caja__icon'>
            {/* ICONO DE CALENDARIO */}
            <i className={`fa-solid fa-calendar card__icon`} title='Fecha de creacion'></i>
            <div className='card__alert'>{formatDate(task.date)}</div>
          </div>

        </section>
        <section className='card__icon-container'>
          {/* ICONO ATRAS */}
          <i className="fa-solid fa-arrow-left card__icon"></i>
          {/* ICONO SIGUIENTE */}
          <i className="fa-solid fa-arrow-right-long card__icon"></i>
        </section>
      </aside>

    </article>
  )
}

