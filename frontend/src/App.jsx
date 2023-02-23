import React, { useState } from 'react'
import Inicio from '../src/pages/Inicio'
//IMPORTAMOS NUESTRO CONTEXTO
import { AppContext } from './context/AppContext'
import { tareas } from './data/tareas'

export const App = () => {

  const [grupos, setGrupos] = useState(tareas)

  let estadosGlobales = {
    grupos,
    setGrupos
  }

  /////////////////////////
  return (
    <AppContext.Provider value={estadosGlobales}>
      <Inicio/>
    </AppContext.Provider>
  )
}
