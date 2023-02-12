import React, { useState } from 'react'
import './Card.css'

export const Card = () => {

  const [editable, setEditable] = useState(1) // 1 activo - 0 desactivado

  return (
    <article className='card'>

      <main className='card__main'>
        <textarea className='card__title' disabled={editable}>#Lorem...</textarea>
        <textarea className='card__container' disabled={editable}>Lorem impun dolor...</textarea>
      </main>

      <aside className='card__aside'>
        <section className='card__icon-container'>
          <i class="fa-sharp fa-solid fa-trash card__icon"></i> 
          <i class="fa-solid fa-pencil card__icon" onClick={()=>setEditable(!editable)}></i>
          <i class="fa-solid fa-clock card__icon"></i>
          <i class="fa-solid fa-calendar card__icon"></i>
        </section>
        <section className='card__icon-container'>
          <i class="fa-solid fa-arrow-left card__icon"></i>
          <i class="fa-solid fa-arrow-right-long card__icon"></i>
        </section>
      </aside>

    </article>
  )
}
