/* ES TO EN */
import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { Card } from "../Card/Card";
import "./Column.css";
import { Droppable, Draggable } from "react-beautiful-dnd";

export const Column = ({ title, color, group = [], type }) => {
  const { typeColumn } = useContext(AppContext);

  /////////////////////////////
  return (
    <div
      className={`column ${
        (typeColumn === "all" || typeColumn === type) && "column--visible"
      }`}
      data-theme
    >
      <div className="column__container__title">
        <h5 className={`column__title ${`column__title--${color}`}`}>
          {title}
        </h5>
        <h3 className="column__contador">{group.length}</h3>
      </div>
      {/* DROPPABLE STARTS */}
      <Droppable droppableId={title}>
        {(droppableProvided) => (
          <div
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className={`column__container-cards ${
              typeColumn === "all" && "column__container-cards--1column"
            }`}
          >
            {/* RENDERIZADO DE LAS TAREAS  Y Draggable*/}
            {group &&
              group.length >= 1 &&
              group.map((task, index) => (
                <Draggable
                  key={`tarea${task["_id"]}`}
                  draggableId={`tarea${task["_id"]}`}
                  index={index}
                >
                  {(draggableProvided) => (
                    <div
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                    >
                      <Card task={task} />
                    </div>
                  )}
                </Draggable>
              ))}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
