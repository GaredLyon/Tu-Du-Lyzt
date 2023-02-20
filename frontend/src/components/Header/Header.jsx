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
		// console.log(values)

		setTags(values)
	},[groups])

	const { setTypeCards, setTypeColumn} = useContext(AppContext)

	/////////////////////////////
	const filtrarPorEstado = (e) => {
		const valor = e.target.value
		// console.log(valor)
		setTypeColumn(valor)
	}

	const filtrarPorPrioridad = (e) => {
		const valor = e.target.value
		// console.log(valor)
		setTypeCards(valor)
	}

	///////////////////////////////////////////
	return (
		<header className="header">

			{/* CONTENEDOR */}
			<div className="header__container" data-theme>

				{/* CAJA DE SELECTORESS */}
				<section className="header__container-selectors">

					{/* SELECTOR 1 */}
					<select className="header__selector" name="priority" id="priority" title="Prioridad" onChange={filtrarPorPrioridad}>
						{/* <optgroup label="priority"> */}
							<option value="all">Todos</option>
							<option value="high">Alto</option>
							<option value="middle">Medio</option>
							<option value="low">Bajo</option>
						{/* </optgroup> */}
					</select>

					{/* SELECTOR 2 */}
					<select className="header__selector" name="column" id="column" title='Estado de las tareas' onChange={filtrarPorEstado}>
						{/* <optgroup label="column"> */}
							<option value="all">Todos</option>
							<option value="pendients">Pendientes</option>
							<option value="progress">Proceso</option>
							<option value="completed">Completados</option>
						{/* </optgroup> */}
					</select>

					{/* SELECTOR 3 */}
					<select className="header__selector" name="tag" id="tag" title="Lista de tags">
						<option value="">Todos</option>
						{tags.map((tag, index) => (
							<option key={index} value={tag}> {tag}</option>
						))}
					</select>

					{/* SELECTOR 4 */}
					{/* <select className="header__selector" name="time" id="time" title="Fecha de creación">
							<option value="all">Todos</option>
							<option value="day">1 hora</option>
							<option value="day">2 horas</option>
							<option value="day">4 horas</option>
							<option value="day">8 horas</option>
							<option value="day">12 horas</option>
					</select> */}
				</section>

				{/* BUSCADOR */}
				<TextInput/>
			</div>

		</header>
	);
};

export default Header;
