import React from "react";
import { Card } from "../Card/Card";
import "./Column.css";

export const Column = ({ titleColor, titleText }) => {

	return (
		<div className="column">
			<div className="column__container__title">
				<h5 className={`column__title ${`column__title--${titleColor}`}`}>{titleText}</h5>
			</div>
			<div className="column__container-cards">
				<Card color={"red"} />
				<Card color={"yellow"} />
				<Card color={"yellow"} />
				<Card color={"blue"} />
				<Card color={"blue"} />
				<Card color={"blue"} />
				<Card color={"blue"} />
			</div>
		</div>
	);
};
