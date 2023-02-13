import React from 'react'
import { Columna } from './Columna/Columna'
import './Main.css'

export const Main = () => {
  return (
    <>
      

      {/* CONTENEDOR DE COLUMNAS */}
      <div className='container-columns'>
        <Columna titleColor={'gray'} titleText={'Todo'}/>
        <Columna titleColor={'purple'} titleText={'Progress'}/>
        <Columna titleColor={'green'} titleText={'Completed'}/>
      </div>
    </>
  )
}
