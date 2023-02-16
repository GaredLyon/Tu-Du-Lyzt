import React, { useState } from 'react'
import { editarTarea } from '../../../helpers/editarTarea'
import { eliminartarea } from '../../../helpers/eliminarTarea'
import './Card.css'


const obtenerColor = (nivel) => {
  switch (nivel) {
    case 'High': return 'red'
    case 'Middle': return 'yellow'
    default: return 'blue'
  }
}

///////////////////////////////////////////////////
export const Card = ({idGrupo , tarea }) => {

  const [editable, setEditable] = useState(1) // 1 no editable - 0 editable

  const [{nivel, contenido}, setTareaActual] = useState(tarea)


  //EDITAR TAREA ******************************************************
  const editarTareaActual = ( idGrupo, idTarea) => {

    const titulo = document.getElementById(`input1-tarea${tarea.id}`).textContent
    const descripcion = document.getElementById(`input2-tarea${tarea.id}`).textContent
    
    //EJECUTAR LA PETICION AL SERVIDOR
    editarTarea({
      idGrupo,
      idTarea,
      nuevoContenido: {
        titulo,
        descripcion
      }
    })

  }

  //ELIMINAR TAREA ****************************************************
  const eliminarTareaActual = (idGrupo, idTarea) => {

    // console.log(`se elimino la tarea: ${idTarea} del grupo: ${idGrupo}`)

    //EJECUTAR LA PETICION AL SERVIDOR
    eliminartarea({
      idGrupo,
      idTarea
    })

    //ELIMINAR LA TAREA VISUALMENTE


  }

  //////////////////////////////////
  return (
    <article className={`card ${`card--${obtenerColor(nivel)}`}`} draggable>
      
      {/* CARD MAIN */}
      <main className='card__main'>
        <textarea
          className='card__title'
          disabled={editable}
          maxLength={20}
          defaultValue={contenido.titulo}

          id={`input1-tarea${tarea.id}`}
          />
        <textarea
          className='card__container'
          disabled={editable}
          defaultValue={contenido.descripcion}

          id={`input2-tarea${tarea.id}`}
          />
      </main>

      {/* CARD ASIDE */}
      <aside className='card__aside'>
        <section className='card__icon-container'>
          <i
            className="fa-sharp fa-solid fa-trash card__icon"
            onClick={() => eliminarTareaActual(idGrupo, tarea.id)}></i>
          {
            editable ? (
              <i
                className="fa-solid fa-pencil card__icon"
                onClick={()=>setEditable(!editable)}>
              </i>
            ): (
              <i
                className="fa-solid fa-floppy-disk card__icon"
                onClick={()=>{
                  editarTareaActual(idGrupo, tarea.id)
                  setEditable(!editable)
                }}>
              </i>
            )
          }
 
          <div className='caja__icon'>
            <i className={`fa-solid fa-clock card__icon`}></i>
            <div className='card__aviso'>Hace 1 hora</div>
          </div>

          <div className='caja__icon'>
            <i className={`fa-solid fa-calendar card__icon`}></i>
            <div className='card__aviso'>24 de Enero</div>
          </div>

        </section>
        <section className='card__icon-container'>
          <i className="fa-solid fa-arrow-left card__icon"></i>
          <i className="fa-solid fa-arrow-right-long card__icon"></i>
        </section>
      </aside>

    </article>
  )
}

