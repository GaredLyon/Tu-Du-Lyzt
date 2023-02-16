import React, { useEffect, useState } from 'react'
import Inicio from './Inicio'

//IMPORTAMOS NUESTRO CONTEXTO
import { AppContext } from './context/appContext'
import { tareas } from './components/data/tareas'

export const App = () => {

  let estadoGlobal = tareas

  /////////////////////////
  return (
    <AppContext.Provider value={estadoGlobal}>
      <Inicio/>
    </AppContext.Provider>
  )
}
