import React from 'react'
import { Card } from '../Card/Card'
import './Columna.css'

export const Columna = ({titleColor, titleText}) => {
  return (
    <article className={`columna`}>
      <h5 className={`columna__title ${`columna__title--${titleColor}`}`}>{titleText}</h5>
      <div className='columna__container-cards'>
        <Card color={'red'}/>
        <Card color={'yellow'}/>
        <Card color={'blue'}/>
      </div>
    </article>
  )
}
