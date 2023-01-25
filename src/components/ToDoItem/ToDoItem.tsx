import React from 'react';

type ToDoItem = {
    title: string
    dateAdd: string
    isStatus: boolean
}

const ToDoItem = ({title, dateAdd, isStatus}: ToDoItem) => {
    return (
        <div style={{
            backgroundColor: "#fff",
            border: "2px solid #FFF",
            borderRadius: "10px",
            padding: "10px"
        }}>
            <h3>{title}</h3>
        </div>
    );
};

export default ToDoItem;