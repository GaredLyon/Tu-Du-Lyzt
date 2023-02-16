import React from 'react'
import { agregarTarea } from '../../helpers/agregartarea'
import './Aside.css'

export const Aside = () => {

  //AGREGAR TAREA *******************
  const agregarNuevaTarea = (evento, idGrupo) => {
    // evento.preventDefault()

    //OBTENER TODOS LOS VALORES QUE NECESITO
    let dificultad = evento.target.dificultad.value /* LISTO */
    let columna = evento.target.columna.value /* LISTO */
    let inputTitulo = evento.target.inputTitulo.value /* LISTO */
    let inputDescripcion = evento.target.inputDescripcion.value /* LISTO */

    const obtenerIdGrupo = (columna) => {
      switch (columna) {
        case 'Progress': return 2
        default: return 1
      }
    }
    // console.log(`se agrego nueva tarea, de dificultad: "${dificultad}", a la columna de "${columna}", tiene el titulo "${inputTitulo}" y descripcion "${inputDescripcion}"`)
    
    //USAR EL HELPER
    agregarTarea({
      idGrupo: obtenerIdGrupo(columna),
      dificultad,
      cuerpo: {
        columna, inputTitulo, inputDescripcion
      }
    })

  }


  //////////////////////////////
  return (
    <aside className='aside'>
      <h3 className='aside__title'>Tu-Du Lyzt</h3>
      <form className='aside__form' onSubmit={(evento) => {
        evento.preventDefault()
        agregarNuevaTarea(evento)
      }}>

        {/* HEADER DEL FORMULARIO */}
        <header className='header__formulario'>
          <div>
            <select name='dificultad'>
              <option>Low</option>
              <option>Middle</option>
              <option>High</option>
            </select>
            <select name='columna'>
              <option>Todo</option>
              <option>Progress</option>
            </select>
          </div>

          <div>
            <button className='aside__contenedor-iconos'>
              <i className="fa-regular fa-calendar"></i>
            </button>
            <button className='aside__contenedor-iconos'>
              <i className="fa-sharp fa-solid fa-trash"></i>
            </button>
          </div>

        </header>

        {/* CONTENEDOR DE TEXTO */}
        <div className='header__texto'>
          <textarea
            className='header__input1'
            rows="1"
            defaultValue='#Tag...'
            name='inputTitulo'/>
          <hr/>
          <textarea
            className='header__input2'
            rows="9"
            defaultValue='Task...'
            name='inputDescripcion'/>
        </div>

        <button className='aside__boton-crear'>Create</button>
      </form>
    </aside>
  )
}
