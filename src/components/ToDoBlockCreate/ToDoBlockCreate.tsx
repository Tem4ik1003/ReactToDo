import React from 'react';
import ButtonAdd from "../UI/ButtonAdd";

type PropsType = {
    addBlockToDo: (title:string) => void
}

const ToDoBlockCreate = ({addBlockToDo}: PropsType) => {


    const onAddBlock = () => {
        addBlockToDo('New Block')
    }

    return (
        <div style={{
            minWidth: "300px",
            width: "400px",
            minHeight: "400px",
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
                <ButtonAdd onClick={() => onAddBlock()}/>
            </div>
        </div>
    );
};

export default ToDoBlockCreate;