/* ES TO EN */

import React, { useState } from 'react'
import Home from './pages/Home'
//IMPORTAMOS NUESTRO CONTEXTO
import { AppContext } from './context/AppContext'
import { data } from './data/data'

export const App = () => {

  const [groups, setGroups] = useState(data)

  let globalStates = {
    groups,
    setGroups
  }

  /////////////////////////
  return (
    <AppContext.Provider value={globalStates}>
      <Home/>
    </AppContext.Provider>
  )
}
