import React, { useState } from 'react'
import Inicio from '../src/pages/Inicio'
//IMPORTAMOS NUESTRO CONTEXTO
import { AppContext } from './context/AppContext'
import { data } from './data/data'

export const App = () => {

  const [grupos, setGrupos] = useState(data)

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
