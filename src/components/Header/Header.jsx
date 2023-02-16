import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">

			{/* CONTENEDOR */}
			<div className="header__contenedor">

				{/* CAJA DE SELECTORESS */}
				<section className="header__contenedor-selectores">

					{/* SELECTOR 1 */}
					<select className="header__selector" name="priority" id="priority" >
						{/* <optgroup label="priority"> */}
							<option value="">all</option>
							<option value="high">High</option>
							<option value="middle">Middle</option>
							<option value="low">Low</option>
						{/* </optgroup> */}
					</select>

					{/* SELECTOR 2 */}
					<select className="header__selector" name="column" id="column">
						{/* <optgroup label="column"> */}
							<option value="all">all</option>
							<option value="todo">Todo</option>
							<option value="progress">Progress</option>
							<option value="completed">completed</option>
						{/* </optgroup> */}
					</select>

					{/* SELECTOR 3 */}
					<select className="header__selector" name="tag" id="tag">
						{/* <optgroup label="tag"> */}
							<option value="">all</option>
						{/* </optgroup> */}
					</select>

					{/* SELECTOR 4 */}
					<select className="header__selector" name="time" id="time">
						{/* <optgroup label="time"> */}
							<option value="all">all</option>
							<option value="day">day</option>
							<option value="week">week</option>
							<option value="month">month</option>
						{/* </optgroup> */}
					</select>
				</section>

				{/* BUSCADOR */}
				<div className="header__buscador">
					<input type="text" placeholder="search by importance" className="buscador"></input>
					<i className="fa-solid fa-magnifying-glass"></i>
				</div>
			</div>

		</header>
	);
};

export default Header;
