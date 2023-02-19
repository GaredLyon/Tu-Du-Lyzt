/* ES TO EN */

import { Main } from "../components/Main/Main"
import { Aside } from "../components/Aside/Aside"
import Header  from "../components/Header/Header"
import { useState } from "react"
import './Home.css'

function Home() {

  const [asideVisible, setAsideVisible] = useState(false)

  const toogleAside = (valor) =>{
    setAsideVisible(valor)
  }

  return (
    <main className="App">
      {/* ASIDE */}
      <section className={`App__aside ${asideVisible && 'App__aside--visible'}`}>
        {/* boton cerrar */}
        <button className="Aside__button-close" onClick={ () => toogleAside(false)}>
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
          <Main asideVisible={asideVisible} toogleAside={toogleAside}/>
        </div>

      </section>
    </main>
  )
}

export default Home
