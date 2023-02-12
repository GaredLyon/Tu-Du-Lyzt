import React, { useState } from 'react'
import './Card.css'

export const Card = () => {

  const [editable, setEditable] = useState(1) // 1 no editable - 0 editable

  return (
    <article className='card'>
      
      {/* CARD MAIN */}
      <main className='card__main'>
        <textarea className='card__title' disabled={editable}>#Lorem...</textarea>
        <textarea className='card__container' disabled={editable}>Lorem impun dolor...</textarea>
      </main>

      {/* CARD ASIDE */}
      <aside className='card__aside'>
        <section className='card__icon-container'>
          <i class="fa-sharp fa-solid fa-trash card__icon"></i> 
          <i class="fa-solid fa-pencil card__icon" onClick={()=>setEditable(!editable)}></i>
          <Icono icono={'fa-clock'} texto={'Hace 1 hora'}/>
          <Icono icono={'fa-calendar'} texto={'24 de Enero'}/>
        </section>
        <section className='card__icon-container'>
          <i class="fa-solid fa-arrow-left card__icon"></i>
          <i class="fa-solid fa-arrow-right-long card__icon"></i>
        </section>
      </aside>

    </article>
  )
}

///////////////////////////////////
const Icono = ({icono, texto}) => {
  return (
    <div className='caja__icon'>
      <i class={`fa-solid ${icono} card__icon`}></i>
      <div className='card__aviso'>{texto}</div>
    </div>
  )
}
