import React, { useEffect, useState } from "react";
import { ordenarLista } from "../../../helpers/ordenarLista";
import { Card } from "../Card/Card";
import "./Column.css";

export const Column = ({ grupo }) => {

	const { id, titulo, color, tareas } = grupo


	const [misTareas, setMisTareas] = useState(tareas)

	useEffect(() => {

		setMisTareas(ordenarLista(tareas))

	}, [tareas])

	/////////////////////////////
	return (
		<div className="column">
			<div className="column__container__title">
				<h5 className={`column__title ${`column__title--${color}`}`}>{titulo}</h5>
				<h3 className="column__contador">{tareas.length}</h3>
			</div>
			<div className="column__container-cards">

				{/* RENDERIZADO DE LAS TAREAS */}
				{
					misTareas && misTareas.length >= 1 && misTareas.map(tarea => (
						<Card key={`tarea${tarea.id}`} idGrupo={id} tarea={tarea} />
					))
				}
			</div>
		</div>
	)
}
