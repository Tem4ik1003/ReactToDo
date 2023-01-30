import React from 'react';

type PropsType = {
    title: string
    isStatus: boolean
}

const ToDoItem = ({title, isStatus}: PropsType) => {
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