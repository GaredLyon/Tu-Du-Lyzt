import React from "react";
import { Card } from "../Card/Card";
import "./Column.css";

export const Column = ({ grupo }) => {

	const {color, titulo, tareas} = grupo

	/////////////////////////////
	return (
		<div className="column">
			<div className="column__container__title">
				<h5 className={`column__title ${`column__title--${color}`}`}>{titulo}</h5>
			</div>
			<div className="column__container-cards">

	      {/* RENDERIZADO DE LAS TAREAS */}
				{
					tareas.length >= 1 && tareas.map((tarea, index) => (
						<Card tarea={tarea} key={index}/>
					))
				}
			</div>
		</div>
	)
}
