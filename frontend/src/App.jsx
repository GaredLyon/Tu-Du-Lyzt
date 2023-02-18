import React, { useState } from 'react'
import Home from './pages/Home'
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
      <Home/>
    </AppContext.Provider>
  )
}
