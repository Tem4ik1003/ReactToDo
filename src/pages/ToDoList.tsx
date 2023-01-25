import React from 'react';
import ToDoItem from "../components/ToDoItem/ToDoItem";
import ToDoBlock from "../components/ToDoBlock/ToDoBlock";

const ToDoList = () => {
    return (
        <div style={{
            backgroundColor: "#3e3e3e",
            minHeight: "100vh",
            padding: "20px",
            display: "flex",
            justifyContent: "space-around"
        }}>
            <ToDoBlock title={'in progress'}/>
        </div>
    );
};

export default ToDoList;