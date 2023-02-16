import React from 'react'
import { Column } from './Column/Column'
import './Main.css'

export const Main = ({asideVisible, alternarAside}) => {

  return (
    <div className='container-columns'>
      {
        !asideVisible && (
          <button className='main__boton-new' onClick={()=>alternarAside(x => !x)}>
            <i class="fa-solid fa-plus"></i>
          </button>
        )
      }

      <Column titleColor={'gray'} titleText={'Todo'}/>
      <Column titleColor={'purple'} titleText={'Progress'}/>
      <Column titleColor={'green'} titleText={'Completed'}/>
    </div>
  )
}
