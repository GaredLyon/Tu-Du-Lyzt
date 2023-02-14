import { Main } from "./components/Main2/Main"
import './App.css'
import { Aside } from "./components/Aside/Aside"
import Header  from "./components/Header/Header"

function App() {

  return (
    <main className="App">
      {/* ASIDE */}
      <section className="App__aside">
        <Aside/>
      </section>

      <section className="App__container">

        {/* HEADER */}
        <div className="App__header">
          <Header/>
          
        </div>

        {/* MAIN */}
        <div className="App__main">
          <Main/>
        </div>

      </section>
    </main>
  )
}

export default App
