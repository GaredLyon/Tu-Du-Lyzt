import React from "react";
import { Card } from "../Card/Card";
import "./Column.css";

export const Column = ({ titleColor, titleText }) => {
  return (
    <article className={`column`}>
      <h5 className={`column__title ${`column__title--${titleColor}`}`}>
        {titleText}
      </h5>
      <div className="column__container-cards">
        <Card color={"red"} />
        <Card color={"yellow"} />
        <Card color={"blue"} />
        <Card color={"blue"} />
        <Card color={"blue"} />
      </div>
    </article>
  );
};
