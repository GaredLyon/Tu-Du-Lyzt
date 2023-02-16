// import React, { useContext, useEffect, useState } from 'react'
import React, { useContext} from 'react'
import { AppContext } from '../../context/appContext'
// import { tareas } from '../data/tareas'
import { Column } from './Column/Column'
import './Main.css'

export const Main = ({asideVisible, alternarAside}) => {


  const grupos = useContext(AppContext)
  // const [grupos, setGrupos] = useState([])

  // useEffect(()=> {
  //   setGrupos(tareas)
  // }, [])

  //////////////////////////////////////
  return (
    <div className='container-columns'>
      {/* RENDERIZADO DE LOS GRUPOS */}
      {
        grupos && grupos.length >= 1 && grupos.map((grupo) => (
          <Column grupo={grupo} key={`columna${grupo.id}`}/>
        ))
      }

      {/* BOTON PARA MOSTRAR EL ASIDE Y AGREGAR NUEVA TAREA */}
      {
        !asideVisible && (
          <button className='main__boton-new' onClick={()=>alternarAside(x => !x)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        )
      }
    </div>
  )
}
