import { Main } from "./components/Main2/Main"
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="App__aside"></div>
      <div className="App__container">
        <div className="App__header"></div>
        <div className="App__main">
          <Main/>
        </div>
      </div>
    </div>
  )
}

export default App
