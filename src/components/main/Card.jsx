import React from 'react'
import './Card.css'

export const Card = () => {
  return (
    <article className='card'>
      <div className='card__main'>
        <h4 className='card__title'>#Lorem...</h4>
        <p className='card__contain'>Lorem impun dolor...</p>
      </div>
      <div className='card__aside'>
        <div className='card__icon-container'>
          <i class="fa-sharp fa-solid fa-trash card__icon"></i> 
          <i class="fa-solid fa-pencil card__icon"></i>
          <i class="fa-solid fa-clock card__icon"></i>
          <i class="fa-solid fa-calendar card__icon"></i>
        </div>
        <div className='card__icon-container'>
          <i class="fa-solid fa-arrow-left card__icon"></i>
          <i class="fa-solid fa-arrow-right-long card__icon"></i>
        </div>
      </div>
    </article>
  )
}
