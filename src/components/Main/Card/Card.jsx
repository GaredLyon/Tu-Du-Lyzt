import React, { useContext, useState } from 'react'
import './Card.css'
import { editarTarea } from '../../../helpers/editarTarea'
import { eliminartarea } from '../../../helpers/eliminarTarea'
import { AppContext } from '../../../context/appContext'
import { formatearFecha } from '../../../helpers/formatearFecha'
import { formatearHora } from '../../../helpers/formatearHora'

const obtenerColor = (nivel) => {
  switch (nivel) {
    case 'High': return 'red'
    case 'Middle': return 'yellow'
    default: return 'blue'
  }
}

///////////////////////////////////////////////////
export const Card = ({idGrupo , tarea}) => {

  const {id, nivel, contenido} = tarea

  const [editable, setEditable] = useState(1) // 1 no editable - 0 editable
  
  //PARA MOSTARA EL TIEMPO TRANSCURRIDO
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState()

  setTimeout(() => {
    let respuesta = formatearHora(tarea.fechayhora)
    setTiempoTranscurrido(respuesta)
  }, 1000);


  //EDITAR TAREA ******************************************************
  const editarTareaActual = ( idGrupo) => {

    const titulo = document.getElementById(`input1-tarea${id}`).value
    const descripcion = document.getElementById(`input2-tarea${id}`).value
    
    setGrupos(estadoActual => {
      
      const gruposActualizados = estadoActual.map(grupo => {
        if (grupo.id === idGrupo) {

          let tareasActualizadas = grupo.tareas.map(tarea => {
            tarea.contenido.titulo = titulo
            tarea.contenido.descripcion = descripcion

            return tarea
          })

          return {
            ...grupo,
            tareas: [...tareasActualizadas]
          }
        }
        return grupo
      })

      return gruposActualizados
    })


    // //EJECUTAR LA PETICION AL SERVIDOR
    // editarTarea({
    //   idGrupo,
    //   idTarea,
    //   nuevoContenido: {
    //     titulo,
    //     descripcion
    //   }
    // })

  }

  //ELIMINAR TAREA ****************************************************
  const {grupos, setGrupos} = useContext(AppContext)

  const eliminarTareaActual = (idGrupo, idTarea) => {

    setGrupos(estadoActual => {
      
      const gruposActualizados = estadoActual.map(grupo => {
        if (grupo.id === idGrupo) {

          let nuevaLista = grupo.tareas.filter(tarea => tarea.id !== idTarea)

          return {
            ...grupo,
            tareas: [...nuevaLista]
          }
        }
        return grupo
      })

      // console.log(gruposActualizados[idGrupo].tareas)
      return gruposActualizados
    })


    //EJECUTAR LA PETICION AL SERVIDOR
    // eliminartarea({
    //   idGrupo,
    //   idTarea
    // })
  }

  //////////////////////////////////
  return (
    <article className={`card ${`card--${obtenerColor(nivel)}`}`} draggable>
      
      {/* CARD MAIN */}
      <main className='card__main'>
        <textarea
          id={`input1-tarea${id}`}
          className='card__title'
          defaultValue={contenido.titulo}
          disabled={editable}
          maxLength={20}
          rows="1" />
        <textarea
          id={`input2-tarea${id}`}
          className='card__container'
          defaultValue={contenido.descripcion}
          disabled={editable}
          />
      </main>

      {/* CARD ASIDE */}
      <aside className='card__aside'>
        <section className='card__icon-container'>
          {/* ICONO TACHO */}
          <i
            className="fa-sharp fa-solid fa-trash card__icon"
            onClick={() => eliminarTareaActual(idGrupo, id)}></i>
          {
            editable ? (
              /* ICONO LAPIZ */
              <i
                className="fa-solid fa-pencil card__icon"
                onClick={()=>setEditable(!editable)}>
              </i>
            ): (
              /* ICONO GUARDAR */
              <i
                className="fa-solid fa-floppy-disk card__icon"
                onClick={()=>{
                  editarTareaActual(idGrupo, id)
                  setEditable(!editable)
                }}>
              </i>
            )
          }

          <div className='caja__icon'>
            {/* ICONO DE RELOJ */}
            <i className={`fa-solid fa-clock card__icon`}></i>
            <div className='card__aviso'>{tiempoTranscurrido}</div>
            <div className='card__aviso'>{}</div>
          </div>

          <div className='caja__icon'>
            {/* ICONO DE CALENDARIO */}
            <i className={`fa-solid fa-calendar card__icon`}></i>
            <div className='card__aviso'>{formatearFecha(tarea.fechayhora)}</div>
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

