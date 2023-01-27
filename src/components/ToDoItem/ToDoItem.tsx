import React from 'react';

type ToDoItem = {
    title: string
    isStatus: boolean
}

const ToDoItem = ({title, isStatus}: ToDoItem) => {
    return (
        <div style={{
            backgroundColor: "#fff",
            border: "2px solid #FFF",
            borderRadius: "10px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between"
        }}>
            <h3>{title}</h3>
            <input type="checkbox"/>
        </div>
    );
};

export default ToDoItem;