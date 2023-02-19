/* ES TO EN */

import React, { useEffect, useState } from "react";
import { sortedList } from "../../../helpers/sortedList";
import { Card } from "../Card/Card";
import "./Column.css";

export const Column = ({ group }) => {

	const { id, title, color, tasks } = group

	const [myTasks, setMyTasks] = useState(tasks)

	useEffect(() => {

		setMyTasks(sortedList(tasks))

	}, [tasks])

	/////////////////////////////
	return (
		<div className="column">
			<div className="column__container__title">
				<h5 className={`column__title ${`column__title--${color}`}`}>{title}</h5>
				<h3 className="column__contador">{tasks.length}</h3>
			</div>
			<div className="column__container-cards">

				{/* RENDERIZADO DE LAS TAREAS */}
				{
					myTasks && myTasks.length >= 1 && myTasks.map(task => (
						<Card key={`tarea${task.id}`} idGroup={id} task={task} />
					))
				}
			</div>
		</div>
	)
}
