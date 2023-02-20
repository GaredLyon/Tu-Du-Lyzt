import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
//IMPORTAMOS NUESTRO CONTEXTO
import { AppContext } from './context/AppContext'
// import { data } from './data/data'
import { getListTasks } from './helpers/getListTasks'

/////////////////////////////////////
export const App = () => {
  const [groups, setGroups] = useState([])
  const [columns, setColumns] = useState([
		{
      id: 0,
			title: "pendients",
      color: 'gray',
			visibility: true
		},
		{
      id: 1,
			title: "progress",
      color: 'purple',
			visibility: true
		},
		{
      id: 2,
			title: "completed",
      color: 'green',
			visibility: true
		}
	])

  const [typeColumn, setTypeColumn] = useState('all')
  const [typeCards, setTypeCards] = useState('all')


  //PARA TRAER LA DATA Y ASIGNAR AL STADO GLOBAL ////////////////////////
  const getData = async() => {
    let result = await getListTasks()
    setGroups(result)
  }


  let globalStates = {
    groups,
    setGroups,
    getData,

    columns,
    setColumns,

    typeColumn,
    setTypeColumn,
    typeCards,
    setTypeCards
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
