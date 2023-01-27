import React, {useContext} from 'react';
import ToDoItem from "../ToDoItem/ToDoItem";
import ButtonAdd from "../UI/ButtonAdd";
import {ToDoItemType} from "../../hooks/ListToDos";
import Modal from "../Modal/Modal";
import AddToDo from "../Forms/AddToDo";
import {ModalContext} from "../context/ModalContext";

type propsType = {
    title: string,
    arrayToDo: Array<ToDoItemType>
}

const ToDoBlock = ({title, arrayToDo}: propsType) => {

    const {open} = useContext(ModalContext)

    const toDoItemArray = () => {
        return arrayToDo.map(t => <ToDoItem key={t.id} title={t.title} isStatus={t.status}/>)
    }

    return (
        <div style={{
            width: "400px",
            maxHeight: "400px",
            height: "0",
            paddingBottom: "35%",
            border: "2px solid #FFF",
            borderRadius: "10px",
            position: "relative"
        }}>
            <div style={{
                backgroundColor: "#fff",
                borderRadius: "8px 8px 0 0",
                padding: "10px 0",
                textAlign: "center",
                margin: "0 0 15px 0"
            }}>{title}</div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px 0",
                padding: "0 10px"
            }}>
                {toDoItemArray()}
            </div>
            <div style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-25px)"
            }}><ButtonAdd onClick={() => open()}/>
            </div>
        </div>
    );
};

export default ToDoBlock;