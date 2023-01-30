import React, {Dispatch, SetStateAction, useContext} from 'react';
import ToDoItem from "../ToDoItem/ToDoItem";
import ButtonAdd from "../UI/ButtonAdd";
import {ToDoItemType} from "../../hooks/StateToDos";
import Modal from "../Modal/Modal";
import AddToDo from "../Forms/AddToDo";
import {ModalContext} from "../context/ModalContext";

type PropsType = {
    title: string,
    arrayToDo: Array<ToDoItemType>,
    setSelectTable: (value: SetStateAction<string>) => void
}

const ToDoBlock = ({title, arrayToDo, setSelectTable}: PropsType) => {

    const {open} = useContext(ModalContext)

    const toDoItemArray = () => {
        return arrayToDo.map(t => <ToDoItem key={t.id} title={t.title} isStatus={t.status}/>)
    }

    return (
        <div style={{
            minWidth: "300px",
            width: "400px",
            minHeight: "400px",
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
            }}><ButtonAdd onClick={() => {setSelectTable(title); open()}}/>
            </div>
        </div>
    );
};

export default ToDoBlock;