import React from 'react';
import ButtonAdd from "../UI/ButtonAdd";

const ToDoBlockCreate = () => {
    return (
        <div style={{
            minWidth: "300px",
            width: "400px",
            minHeight: "300px",
            height: "0",
            paddingBottom: "35%",
            border: "2px dashed #FFF",
            borderRadius: "10px",
            position: "relative",
        }}>
            <div style={{
                position: "absolute",
                bottom: "50%",
                left: "50%",
                transform: "translate(-25px, 25px)"
            }}>
                <ButtonAdd onClick={() => alert('dfdf')}/>
            </div>
        </div>
    );
};

export default ToDoBlockCreate;