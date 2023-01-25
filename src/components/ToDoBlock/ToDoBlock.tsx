import React from 'react';
import ToDoItem from "../ToDoItem/ToDoItem";

type propsType = {
    title: string
}

const ToDoBlock = ({title}: propsType) => {
    return (
        <div style={{
            width: "400px",
            height: "400px",
            border: "2px solid #FFF",
            borderRadius: "10px"
        }}>
            <div style={{
                backgroundColor: "#fff",
                borderRadius: "8px 8px 0 0",
                padding: "10px 0",
                textAlign: "center",
                margin: "0 0 15px 0"
            }}>Title</div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px 0",
                padding: "0 10px"
            }}>
                <ToDoItem title={'df'} dateAdd={'df'} isStatus={false}/>
                <ToDoItem title={'df'} dateAdd={'df'} isStatus={false}/>
            </div>
        </div>
    );
};

export default ToDoBlock;