import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { search } from "../../helpers/search";
import './TextInput.css'

////////////////////////////////////////////
const TextInput = () => {

  const texts = [
    "priority: !l = low, !m = middle, !h = high",
    "stack: /t = todo, /p = progress, /c = completed",
    "tag: #tag-name",
    "time: -d = last day,  -w = last week, -m = last month",
    "person: @person-name",
  ];

  const [currentText, setCurrentText] = useState(texts[0].slice(0, 1));
  let numElement = 0;
  let number = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(texts[numElement].slice(0, number));
      number++;
      if (number > texts[numElement].length) {
        numElement++;
        number = 1;
      }
      if (numElement === texts.length) {
        numElement = 0;
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  //FUNCIONAMIENTO DEL BUSCADOR/////////////////
  const {groups, setGroups, getData} = useContext(AppContext)

  const buscar = async () => {
    const busqueda = document.getElementById('buscador').value
    // console.log(busqueda)
    const resultados = await search(busqueda)
    setGroups(resultados)
  }

  const verLargo = (e) =>{
    if (e.target.value.length === 0) {
      getData()
    } else{
      buscar()
    }
  }

  ////////////////////////////////
  return (
    <div className="header__search">
      <input
        id='buscador'
        type="text"
        placeholder={'Buscar por: ' + currentText}
        // placeholder='Buscar'
        className="buscador"
        title='Buscador'
        onChange={verLargo}
      />
      {/* <i className="fa-solid fa-magnifying-glass" onClick={buscar}></i> */}
    </div>
  );
};

export default TextInput;
