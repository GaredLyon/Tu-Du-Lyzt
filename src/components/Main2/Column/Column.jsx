import React, { useState } from "react";
import { Card } from "../Card/Card";
import "./Column.css";

export const Column = ({ grupo }) => {

	const {color, titulo} = grupo
	const [columna, setColumna] = useState(grupo.tareas)


	const modificarColumna = (idTarea) => {

		setColumna(estadoAnterior => {

			let estadoActualizado = estadoAnterior.filter(x => x.id !== idTarea)

			console.log(estadoActualizado)

			return [...estadoActualizado]
		})

		console.log(`se modifico la columna y se elimino la tarea ${idTarea}`)
	}

	/////////////////////////////
	return (
		<div className="column">
			<div className="column__container__title">
				<h5 className={`column__title ${`column__title--${color}`}`}>{titulo}</h5>
			</div>
			<div className="column__container-cards">

	      {/* RENDERIZADO DE LAS TAREAS */}
				{
					columna && columna.map((tarea) => (
						<Card idGrupo={grupo.id} tarea={tarea}  key={`tarea${tarea.id}`} modificarColumna={modificarColumna}/>
					))
				}
			</div>
		</div>
	)
}
