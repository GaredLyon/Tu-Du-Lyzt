import React, { useContext} from 'react'
import './Main.css'
import { Column } from './Column/Column'
import { AppContext } from '../../context/AppContext'

export const Main = ({asideVisible, alternarAside}) => {

  const {grupos} = useContext(AppContext)

  //////////////////////////////////////
  return (
    <div className='container-columns'>
      {/* RENDERIZADO DE LOS GRUPOS */}
      {
        grupos && grupos.length >= 1 && grupos.map(grupo => (
          <Column key={`columna${grupo.id}`} grupo={grupo}/>
        ))
      }

      {/* BOTON PARA AGREGAR NUEVA TAREA Y MOSTRAR EL ASIDE  */}
      {
        !asideVisible && (
          <button className='main__new-button' onClick={()=>alternarAside(x => !x)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        )
      }
    </div>
  )
}
