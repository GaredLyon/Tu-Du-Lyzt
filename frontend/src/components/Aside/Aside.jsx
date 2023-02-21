import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { addTask } from '../../helpers/addTask'
import { changeTheme } from '../../helpers/changeTheme'
import './Aside.css'

////////////////////////////////////
export const Aside = () => {

  const { getData } = useContext(AppContext)

  //PARA CAMBIAR TEMA ///////////////
  const [checkedTheme, setCheckedTheme]= useState(localStorage.getItem("IsChecked")=="true"? true : false)
  
  useEffect(()=>{
    localStorage.setItem("IsChecked", checkedTheme)
    changeTheme({checkedTheme})
  },[checkedTheme])
  function handleCheckboxChange(){
    setCheckedTheme(!checkedTheme)
  }

  //AGREGAR TAREA *******************
  const addNewtask = async(e) => {

    //OBTENER TODOS LOS VALORES QUE NECESITO
    let title = e.target.inputTitle.value 
    let description = e.target.inputDescription.value
    let priority = e.target.priority.value 
    let state = e.target.state.value 

    // console.log(priority, state, title, description)

    if (title || description) {
      await addTask( title, description, priority, state)

      getData()
    }

    //LIMPIAR EL FORMULARIO
    e.target.reset()
  }


  //////////////////////////////
  return (
    <aside className='aside'>
      <h3 className='aside__title'>Tu-Du Lyzt</h3>
      <form className='aside__form' onSubmit={(e) => {
        e.preventDefault()
        addNewtask(e)
      }} data-theme>

        {/* HEADER DEL FORMULARIO */}
        <header className='header__form'>
          <div className='aside__contenedor-selectores'>
            <select name='priority' title='Prioridad'>
              <option  disabled selected>Titulo</option>
              <option value='low'>Bajo</option>
              <option value='middle'>Medio</option>
              <option value='high'>Alto</option>
            </select>
            <select name='state' title='Estado'>
              <option value='pendient'>Pendientes</option>
              <option value='progress'>Proceso</option>
              <option value='completed'>Completados</option>
            </select>
          </div>

        </header>

        {/* CONTENEDOR DE TEXTO */}
        <div className='header__text' data-theme>
          <textarea
            className='header__input1'
            rows="1"
            placeholder='Titulo...'
            name='inputTitle' />
          <hr />
          <textarea
            className='header__input2'
            rows="9"
            placeholder='Descripcion...'
            name='inputDescription' />
        </div>


        <div className='aside__container-icons'>
          <button type='submit' className='aside__button-create'>Crear</button>
          <button type='reset'  className='aside__button-delete' title='Limpiar formulario'>
            <i className="fa-sharp fa-solid fa-trash" data-theme></i>
          </button>
          </div>
      </form>
      
      <input type="checkbox" className="l" onChange={handleCheckboxChange} checked={checkedTheme}></input>
      
    </aside>
  )
}
