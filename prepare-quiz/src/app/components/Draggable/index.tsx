"use client";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const DraggableComponent = () => {
  const initialValue = [
    {
      id: "1",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ea iste maiores quibusdam assumenda numquam natus velit dolores, quis sint?",
      answers: [
        { id: "1.1", content: "Cevap 1" },
        { id: "1.2", content: "Cevap 2" },
        { id: "1.3", content: "Cevap 3" },
        { id: "1.4", content: "Cevap 4" },
        { id: "1.5", content: "Cevap 5" },
      ],
    },
    {
      id: "2",
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit sint?",
      answers: [
        { id: "2.1", content: "Cevap 1" },
        { id: "2.2", content: "Cevap 2" },
        { id: "2.3", content: "Cevap 3" },
        { id: "2.4", content: "Cevap 4" },
        { id: "2.5", content: "Cevap 5" },
      ],
    },
  ];
  const [questions, setQuestions] = useState(initialValue);

  const handleOnDragEnd = (result: any) => {
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="questions" type="question">
        {(provided) => (
          <ul
            className="questions"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {questions.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <li
                    className="bg-gray-100 p-2 m-2 rounded"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <div className="flex gap-2">
                      <span>{index + 1}.</span>
                      <span>{item.question}</span>
                    </div>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableComponent;
