/* ES TO EN */

import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
//IMPORTAMOS NUESTRO CONTEXTO
import { AppContext } from './context/AppContext'
import { data } from './data/data'
import { getListTasks } from './helpers/getListTasks'

export const App = () => {

  const [groups, setGroups] = useState([])

  let globalStates = {
    groups,
    setGroups
  }

  useEffect(() => {
    
    const traer = async() => {
      let resultado = await getListTasks()

      setGroups(resultado)
    }

    traer()

  }, [])

  /////////////////////////
  return (
    <AppContext.Provider value={globalStates}>
      <Home/>
    </AppContext.Provider>
  )
}
