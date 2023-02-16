import React from 'react'
import './Aside.css'

export const Aside = () => {
  return (
    <aside className='aside'>
      <h3 className='aside__title'>Tu-Du Lyzt</h3>
      <form className='aside__form'>

        {/* HEADER DEL FORMULARIO */}
        <header className='header__formulario'>
          <div>
            <select>
              <option>opcion1</option>
              <option>opcion2</option>
              <option>opcion3</option>
              <option>opcion4</option>
              <option>opcion5</option>
            </select>
            <select>
              <option>opcion1</option>
              <option>opcion2</option>
              <option>opcion3</option>
              <option>opcion4</option>
              <option>opcion5</option>
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
          <textarea className='header__input1' name="" id="" rows="1" defaultValue='#Tag...'/>
          <hr/>
          <textarea className='header__input2' name="" id="" rows="9" defaultValue='Task...'/>
        </div>

        <button className='aside__boton-crear'>Create</button>
      </form>
    </aside>
  )
}
