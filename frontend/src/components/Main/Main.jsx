/* ES TO EN */

import React, { useContext} from 'react'
import './Main.css'
import { Column } from './Column/Column'
import { AppContext } from '../../context/AppContext'

export const Main = ({asideVisible, toggleAside}) => {

  const {groups} = useContext(AppContext)

  //////////////////////////////////////
  return (
    <div className='container-columns' data-theme>
      {/* RENDERIZADO DE LOS GRUPOS */}
      {
        groups && groups.length >= 1 && groups.map(group => (
          <Column key={`column${group.id}`} group={group}/>
        ))
      }

      {/* BOTON PARA AGREGAR NUEVA TAREA Y MOSTRAR EL ASIDE  */}
      {
        !asideVisible && (
          <button className='main__new-button' onClick={()=>toggleAside(x => !x)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        )
      }
    </div>
  )
}
