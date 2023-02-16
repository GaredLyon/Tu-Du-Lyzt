import { Main } from "./components/Main2/Main"
import './App.css'
import { Aside } from "./components/Aside/Aside"
import Header  from "./components/Header/Header"
import { useState } from "react"

function Inicio() {

  const [asideVisible, setAsideVisible] = useState(false)

  const alternarAside = (valor) =>{
    setAsideVisible(valor)
  }

  return (
    <main className="App">
      {/* ASIDE */}
      <section className={`App__aside ${asideVisible && 'App__aside--visible'}`}>
        
        <button className="Aside__boton-cerrar" onClick={ () => alternarAside(false)}>
          <i className="fa-solid fa-x"></i>
        </button>
        <Aside/>
      </section>

      <section className="App__container">

        {/* HEADER */}
        <div className="App__header">
          <Header/>

          {/* <button className="Header__boton-abrir" onClick={() => alternarAside(!asideVisible)}>
            <i className="fa-solid fa-bars"></i>
          </button> */}
        </div>

        {/* MAIN */}
        <div className="App__main">
          <Main asideVisible={asideVisible} alternarAside={alternarAside}/>

          {/* xsxsxs */}
        </div>

      </section>
    </main>
  )
}

export default Inicio
