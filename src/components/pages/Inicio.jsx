import { Main } from "../Main/Main"
import { Aside } from "../Aside/Aside"
import Header  from "../Header/Header"
import { useState } from "react"
import './Inicio.css'

function Inicio() {

  const [asideVisible, setAsideVisible] = useState(false)

  const alternarAside = (valor) =>{
    setAsideVisible(valor)
  }

  return (
    <main className="App">
      {/* ASIDE */}
      <section className={`App__aside ${asideVisible && 'App__aside--visible'}`}>
        {/* boton cerrar */}
        <button className="Aside__boton-cerrar" onClick={ () => alternarAside(false)}>
          <i className="fa-solid fa-x"></i>
        </button>
        
        <Aside/>
      </section>

      <section className="App__container">

        {/* HEADER */}
        <div className="App__header">
          <Header/>
        </div>

        {/* MAIN */}
        <div className="App__main">
          <Main asideVisible={asideVisible} alternarAside={alternarAside}/>
        </div>

      </section>
    </main>
  )
}

export default Inicio
