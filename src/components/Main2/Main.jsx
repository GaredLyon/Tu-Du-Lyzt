import React from 'react'
import { Column } from './Column/Column'
import './Main.css'

export const Main = () => {
  return (
    <div className='container-columns'>
      <Column titleColor={'gray'} titleText={'Todo'}/>
      <Column titleColor={'purple'} titleText={'Progress'}/>
      <Column titleColor={'green'} titleText={'Completed'}/>
    </div>
  )
}
