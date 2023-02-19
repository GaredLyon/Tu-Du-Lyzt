/* ES TO EN */
import React, { useEffect, useState } from "react";
// import { sortedList } from "../../../helpers/sortedList";
import { Card } from "../Card/Card";
import "./Column.css";

export const Column = ({ title, color, group }) => {

	// const [myTasks, setMyTasks] = useState(group)

	// useEffect(() => {

	// 	setMyTasks(sortedList(myTasks))

	// }, [myTasks])

	/////////////////////////////
	return (
		<div className="column" data-theme>
			<div className="column__container__title">
				<h5 className={`column__title ${`column__title--${color}`}`}>{title}</h5>
				{/* <h3 className="column__contador">{group.length}</h3> */}
			</div>
			<div className="column__container-cards">

				{/* RENDERIZADO DE LAS TAREAS */}
				{
					group && group.length >= 1 && group.map((task, index) => (
						<Card key={`tarea${index}`} task={task} />
					))
				}
			</div>
		</div>
	)
}
