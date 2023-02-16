import React from 'react'
import { Column } from './Column/Column'
import './Main.css'

export const Main = ({alternarAside}) => {
  return (
    <div className='container-columns'>

      <button className='main__boton-new' onClick={()=>alternarAside(x => !x)}>New</button>

      <Column titleColor={'gray'} titleText={'Todo'}/>
      <Column titleColor={'purple'} titleText={'Progress'}/>
      <Column titleColor={'green'} titleText={'Completed'}/>
    </div>
  )
}
