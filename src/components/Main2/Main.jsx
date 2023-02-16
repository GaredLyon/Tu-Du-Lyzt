import React, { useEffect, useState } from 'react'
import { tareas } from '../data/tareas'
import { Column } from './Column/Column'
import './Main.css'

export const Main = ({asideVisible, alternarAside}) => {

  const [grupos, setGrupos] = useState([])

  useEffect(()=> {
    setGrupos(tareas)
  }, [])

  //////////////////////////////////////
  return (
    <div className='container-columns'>
      {/* RENDERIZADO DE LOS GRUPOS */}
      {
        grupos && grupos.length >= 1 && grupos.map((grupo, index) => (
          <Column grupo={grupo} key={index}/>
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
