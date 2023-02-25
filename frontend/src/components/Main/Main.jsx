import React, { useContext } from "react";
import "./Main.css";
import { Column } from "./Column/Column";
import { AppContext } from "../../context/AppContext";
import { DragDropContext } from "react-beautiful-dnd";
import { solicitarMover } from "../../helpers/solicitarMover";

export const Main = ({ asideVisible, toggleAside }) => {
  const { groups, getData } = useContext(AppContext);

  //////////////////////////////////////
  return (
    <div className="container-columns" data-theme>
      {/* CONTEXT OF DRAGANDDROP STARTS */}
      <DragDropContext
        onDragEnd={(result) => {
          console.log(result);
          const { source, destination, draggableId } = result;
          if (!destination) {
            return;
          }
          if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
          ) {
            return;
          }

          async function reOrden(destination, draggableId) {
            const cardIdDragged = draggableId.slice(5, draggableId.length);
            let destino;
            switch (destination.droppableId) {
              case "Pendiente":
                destino = "pendient";
                break;
              case "Proceso":
                destino = "progress";
                break;
              case "Completados":
                destino = "completed";
                break;

              default:
                break;
            }

            let respuesta = await solicitarMover(cardIdDragged, destino);

            if (respuesta.status) {
              getData();
            }
          }
          reOrden(destination, draggableId);
        }}
      >
        {/* RENDERIZADO DE LOS GRUPOS */}
        {groups[0] && (
          <Column
            title="Pendiente"
            color="gray"
            key={`column${1}`}
            group={groups[0]}
            type="pendients"
          />
        )}
        {groups[1] && (
          <Column
            title="Proceso"
            color="purple"
            key={`column${2}`}
            group={groups[1]}
            type="progress"
          />
        )}
        {groups[2] && (
          <Column
            title="Completados"
            color="green"
            key={`column${3}`}
            group={groups[2]}
            type="completed"
          />
        )}
      </DragDropContext>

      {/* BOTON PARA AGREGAR NUEVA TAREA Y MOSTRAR EL ASIDE  */}
      {!asideVisible && (
        <button
          className="main__new-button"
          onClick={() => toggleAside((x) => !x)}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      )}
    </div>
  );
};
