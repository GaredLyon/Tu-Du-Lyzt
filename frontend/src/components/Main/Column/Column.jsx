/* ES TO EN */
import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { Card } from "../Card/Card";
import "./Column.css";

export const Column = ({ title, color , group = [] , type}) => {

	const {typeColumn} = useContext(AppContext)

	/////////////////////////////
	return (
		<div className={`column ${(typeColumn === 'all' || typeColumn === type) && 'column--visible'}`} data-theme>
			<div className="column__container__title">
				<h5 className={`column__title ${`column__title--${color}`}`}>{title}</h5>
				<h3 className="column__contador">{group.length}</h3>
			</div>
			<div className={`column__container-cards ${typeColumn === 'all' && 'column__container-cards--1column'}`}>

				{/* RENDERIZADO DE LAS TAREAS */}
				{
					group && group.length >= 1 && group.map((task) => (
						<Card key={`tarea${task['_id']}`} task={task} />
					))
				}
			</div>
		</div>
	)
}
