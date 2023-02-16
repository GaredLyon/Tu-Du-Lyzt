import React, { useState } from 'react'
import './Card.css'

export const Card = ({tarea}) => {

  const { nivel, contenido, descripcion} = tarea

  const [editable, setEditable] = useState(1) // 1 no editable - 0 editable

  const obtenerColor = (nivel) => {
		switch (nivel) {
			case 'High': return 'red'
			case 'Middle': return 'yellow'
			default: return 'blue'
		}
	}


  //////////////////////////////////
  return (
    <article className={`card ${`card--${obtenerColor(nivel)}`}`} draggable>
      
      {/* CARD MAIN */}
      <main className='card__main'>
        <textarea className='card__title' disabled={editable} maxLength={20} defaultValue={contenido.titulo}/>
        <textarea className='card__container' disabled={editable} defaultValue={contenido.descripcion}/>
      </main>

      {/* CARD ASIDE */}
      <aside className='card__aside'>
        <section className='card__icon-container'>
          <i className="fa-sharp fa-solid fa-trash card__icon"></i> 
          <i className="fa-solid fa-pencil card__icon" onClick={()=>setEditable(!editable)}></i>

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

