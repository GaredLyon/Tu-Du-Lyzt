import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
//IMPORTAMOS NUESTRO CONTEXTO
import { AppContext } from './context/AppContext'
import { getListTasks } from './helpers/getListTasks'

/////////////////////////////////////
export const App = () => {
  const [groups, setGroups] = useState([])
  const [typeColumn, setTypeColumn] = useState('all')
  const [typeCards, setTypeCards] = useState('all')
  const [busqueda, setBusqueda] = useState('')
  const [numberTheme, setNumberTheme] = useState(1)


  //PARA TRAER LA DATA Y ASIGNAR AL STADO GLOBAL ////////////////////////
  const getData = async() => {
    let result = await getListTasks()
    setGroups(result)
  }


  let globalStates = {
    groups,
    setGroups,
    getData,
    typeColumn,
    setTypeColumn,
    typeCards,
    setTypeCards,
    busqueda,
    setBusqueda,
    numberTheme,
    setNumberTheme
  }


  useEffect(() => {
    getData()
  }, [])

  /////////////////////////
  return (
    <AppContext.Provider value={globalStates}>
      <Home/>
    </AppContext.Provider>
  )
}
