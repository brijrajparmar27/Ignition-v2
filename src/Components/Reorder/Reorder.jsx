import React from "react";
import "./Reorder.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import useLinks from "../../Hook/ContextHooks/useLinks";
import { VscGrabber } from "react-icons/vsc";

export default function Reorder() {
  const { links, setLinks } = useLinks();
  const handleDragEnd = ({ source, destination }) => {
    if (source.index == destination.index) {
      return;
    }
    let grabbed = links[source.index];
    let newlinks = links;
    newlinks.splice(source.index, 1);
    newlinks.splice(destination.index, 0, grabbed);
    setLinks(newlinks);
  };

  return (
    <div className="sequence">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="reorder">
          {(provided) => {
            return (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {links?.map((each, index) => {
                  return (
                    <Draggable
                      draggableId={`${each.id}`}
                      index={index}
                      key={each.id}
                    >
                      {(provided) => {
                        return (
                          <div
                            className="link_card"
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                          >
                            <p>{each.title}</p>
                            <div className="card_grabber">
                              <VscGrabber />
                            </div>
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
