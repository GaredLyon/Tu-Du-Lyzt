import React, { useState } from 'react'
import Inicio from './components/pages/Inicio'
//IMPORTAMOS NUESTRO CONTEXTO
import { AppContext } from './context/appContext'
import { tareas } from './components/data/tareas'

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
