import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { getTags } from "../../helpers/getTags";
import "./Header.css";
import TextInput from '../TextInput/TextInput'

///////////////////////////////////////////
const Header = () => { 
  const {groups} = useContext(AppContext)  

	const [tags, setTags] = useState([]);

	useEffect(() => {
		let values = getTags(groups)
		setTags(values)
	},[groups])

	///////////////////////////////////////////
	return (
		<header className="header">

			{/* CONTENEDOR */}
			<div className="header__container">

				{/* CAJA DE SELECTORESS */}
				<section className="header__container-selectors">

					{/* SELECTOR 1 */}
					<select className="header__selector" name="priority" id="priority" >
						{/* <optgroup label="priority"> */}
							<option value="all">TODOS</option>
							<option value="high">High</option>
							<option value="middle">Middle</option>
							<option value="low">Low</option>
						{/* </optgroup> */}
					</select>

					{/* SELECTOR 2 */}
					<select className="header__selector" name="column" id="column">
						{/* <optgroup label="column"> */}
							<option value="all">TODOS</option>
							<option value="todo">Todo</option>
							<option value="progress">Progress</option>
							<option value="completed">completed</option>
						{/* </optgroup> */}
					</select>

					{/* SELECTOR 3 */}
					<select className="header__selector" name="tag" id="tag">
						{/* <optgroup label="tag"> */}
						<option value="">TODOS</option>
						{tags.map((tag, index) => (
							<option key={index} value={tag}> {tag}</option>
						))}
						{/*</optgroup> */}
					</select>

					{/* SELECTOR 4 */}
					<select className="header__selector" name="time" id="time">
						{/* <optgroup label="time"> */}
							<option value="all">TODOS</option>
							<option value="day">1 hora</option>
							<option value="day">2 horas</option>
							<option value="day">4 horas</option>
							<option value="day">8 horas</option>
							<option value="day">12 horas</option>
							<option value="day">1 dia</option>
							<option value="day">2 dias</option>
							<option value="day">3 dias</option>
							<option value="day">4 dias</option>
							<option value="day">5 dias</option>
							<option value="day">6 dias</option>
							<option value="week">1 semana</option>
							<option value="week">2 semanas</option>
							<option value="week">3 semanas</option>
							<option value="month">1 mes</option>
							<option value="month">2 meses</option>
							<option value="month">3 meses</option>
							<option value="month">4 meses</option>
							<option value="month">5 meses</option>
							<option value="month">6 meses</option>
							<option value="month">7 meses</option>
							<option value="month">8 meses</option>
							<option value="month">9 meses</option>
							<option value="month">10 meses</option>
							<option value="month">11 meses</option>
							<option value="month">12 meses</option>
						{/* </optgroup> */}
					</select>
				</section>

				{/* BUSCADOR */}
				<div className="header__search">
					<TextInput  />
					<i className="fa-solid fa-magnifying-glass"></i>
				</div>
			</div>

		</header>
	);
};

export default Header;
