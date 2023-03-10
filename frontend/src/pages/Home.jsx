import { Main } from "../components/Main/Main"
import { Aside } from "../components/Aside/Aside"
import Header  from "../components/Header/Header"
import { useContext, useEffect, useState } from "react"
import './Home.css'
import { startTheme } from "../helpers/startTheme"
import { AppContext } from "../context/AppContext"

////////////////////////////////////////////
function Home() {

  const [asideVisible, setAsideVisible] = useState(false)
  const {setNumberTheme} = useContext(AppContext)

  const toggleAside = (valor) =>{
    setAsideVisible(valor)
  }

  useEffect(() => {
    let number = startTheme()
    setNumberTheme(number)
  },[])

  ////////////////////////////////////////////
  return (
    <main className="App theme1" id='home'>
      {/* ASIDE */}
      <section className={`App__aside ${asideVisible && 'App__aside--visible'}`} data-theme>
        {/* boton cerrar */}
        <button className="Aside__button-close" onClick={ () => toggleAside(false)}>
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
          <Main asideVisible={asideVisible} toggleAside={toggleAside}/>
        </div>

      </section>
    </main>
  )
}

export default Home
