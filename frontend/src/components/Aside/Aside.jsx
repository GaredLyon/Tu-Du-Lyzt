import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { addTask } from '../../helpers/addTask'
import { changeTheme2 } from '../../helpers/changeTheme2'
import './Aside.css'

////////////////////////////////////
export const Aside = () => {

  const { getData, numberTheme, setNumberTheme } = useContext(AppContext)

  //AGREGAR TAREA *******************
  const addNewtask = async (e) => {

    //OBTENER TODOS LOS VALORES QUE NECESITO
    let title = e.target.inputTitle.value
    let description = e.target.inputDescription.value
    let priority = e.target.priority.value
    let state = e.target.state.value

    // console.log(title, description, priority, state)
    // console.log(priority, state, title, description)
    if (title && description && priority && state) {

      setCardGuardando(true)

      await addTask(title, description, priority, state)
      getData()

      setCardGuardando(false)
      setAlertaVisible(false)

      // //LIMPIAR EL FORMULARIO
      e.target.reset()

    } else {
      setAlertaVisible(true)
    }

  }

  const [alertVisible, setAlertaVisible] = useState(false)
  const [cardGuardando, setCardGuardando] = useState(false)
  //////////////////////////////
  return (
    <aside className="aside">
      <h3 className="aside__title">Tu-Du Lyzt</h3>
      <form
        className="aside__form"
        onSubmit={(e) => {
          e.preventDefault();
          addNewtask(e);
        }}
        data-theme
      >
        {/* HEADER DEL FORMULARIO */}
        <header className='header__form'>
          <div className='aside__contenedor-selectores'>
            <select name='priority' title='Prioridad' defaultValue=''>
              <option disabled value=''>Prioridad</option>
              <option value='low'>Bajo</option>
              <option value='middle'>Medio</option>
              <option value='high'>Alto</option>
            </select>
            <select name='state' title='Estado' defaultValue=''>
              <option disabled value=''>Estado</option>
              <option value='pendient'>Pendiente</option>
              <option value='progress'>Proceso</option>
            </select>
          </div>
        </header>

        {/* AVISO EN CASO DE NO ESCOGER LOS 4 CAMPOS */}
        {
          alertVisible && (
            <p className='aside__aviso'>??Campos incompletos!</p>
          )
        }

        {/* CONTENEDOR DE TEXTO */}
        <div className="header__text" data-theme>
          <textarea className="header__input1" rows="1" placeholder="Titulo..." name="inputTitle" col={1} />
          <hr />
          <textarea className="header__input2" rows="9" placeholder="Descripcion..." name="inputDescription" />

          {/* CONTENEDOR CARGANDO FROMULARIO */}
          {
            cardGuardando && (
              <div className='form-cargando'>
                <div className='icono-cargando'></div>
                <p>Guardando</p>
              </div>
            )
          }
        </div>


        <div className='aside__container-icons'>
          <button type='submit' className='aside__button-create' title='Crear tarea'>Crear</button>
          <button type='reset' className='aside__button-delete' title='Limpiar formulario' onClick={() => setAlertaVisible(false)}>
            <i className="fa-sharp fa-solid fa-trash" data-theme></i>
          </button>
        </div>
      </form>

      <button onClick={() => {
        let number = changeTheme2(numberTheme)
        setNumberTheme(number)
      }} className='boton-cambiarTema'>Cambiar tema: {numberTheme}</button>
    </aside>
  )
}
