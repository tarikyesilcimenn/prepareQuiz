"use-client"
import React, { useState } from 'react';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';

const DragFile = () => {
    const [items, setItems] = useState([
        {
            id: 0, content: [
                {
                    id: 100,
                    content: "1. data"
                },
                {
                    id: 200,
                    content: "2. data"
                }
            ]
        },
        {
            id: 1, content: [
                {
                    id: 300,
                    content: "3. data"
                },
                {
                    id: 400,
                    content: "4. data"
                }
            ]
        },
        {
            id: 2, content: [
                {
                    id: 500,
                    content: "5. data"
                },
                {
                    id: 600,
                    content: "6. data"
                }
            ]
        },
    ]);
    const handleDragEnd = (result: DropResult) => {
        const { source, destination } = result;
        if (!destination) return;
        if( source.droppableId === destination.droppableId ){
            const newItems = JSON.parse(JSON.stringify(items));
            const index = parseInt(source.droppableId.split("droppable")[1]);
            const el = newItems[index].content.splice(source.index, 1);
            newItems[index].content.splice(destination.index, 0 , ...el)
            setItems(newItems)
        }else {
            const newItems = JSON.parse(JSON.stringify(items));
            const oldIndex = parseInt(source.droppableId.split("droppable")[1]);
            const newIndex = parseInt(destination.droppableId.split("droppable")[1]);
            const el = newItems[oldIndex].content.splice(source.index, 1);
            newItems[newIndex].content.splice(destination.index, 0 , ...el)
            setItems(newItems)


        }

    };
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            {items.length > 0 && items.map((item, index) => (
                <Droppable key={item.id} droppableId={`droppable${item.id}`}>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {
                                item.content.map((data, dataIndex) => (
                                    <Draggable key={data.id} draggableId={`draggable${data.id}`} index={dataIndex}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                 {...provided.dragHandleProps}
                                                style={{
                                                    background: 'lightblue',
                                                    padding: '10px',
                                                    margin: '10px',
                                                    borderRadius: '5px',
                                                    ...provided.draggableProps.style,
                                                }}
                                            >
                                                {data.content}
                                            </div>
                                        )}
                                    </Draggable>

                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            ))}
        </DragDropContext>
    );
}

export default DragFile