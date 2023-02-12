import React, {useContext, useState} from 'react';
import ToDoBlock from "../components/ToDoBlock/ToDoBlock";
import {arrayToDoTable} from "../data/ListToDoTable";
import {useStateToDos} from "../hooks/StateToDos";
import Modal from "../components/Modal/Modal";
import AddToDo from "../components/Forms/AddToDo";
import {ModalContext} from "../components/context/ModalContext";
import ToDoBlockCreate from "../components/ToDoBlockCreate/ToDoBlockCreate";
import {useStateBlockToDos} from "../hooks/StateBlockToDo";

type PropsType = {
    listToDos: []
}

const ToDoList = () => {

    const {listToDos, addToDo} = useStateToDos()

    const {listBlockToDo, addBlockToDo, changeTitleBlockToDo} = useStateBlockToDos()

    const [selectTable, setSelectTable] = useState('')

    const {modal} = useContext(ModalContext)

    const toDoBlockArray = () => {
        return listBlockToDo.map(t => <ToDoBlock id={t.id}
                                                 title={t.title}
                                                 key={t.id}
                                                 arrayToDo={listToDos.filter((l) => l.typeToDo === t.title)}
                                                 setSelectTable={setSelectTable}
                                                 changeTitleBlockToDo={changeTitleBlockToDo}
        />)
    }
    return (
        <>
            <div style={{
                backgroundColor: "#3e3e3e",
                display: "flex",
                justifyContent: "center",
                padding: "10px"
            }}>
                <div style={{
                    minHeight: "100vh",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    columnGap: "5vw",
                    rowGap: "20px"
                }}>
                    {toDoBlockArray()}
                    <ToDoBlockCreate addBlockToDo={addBlockToDo}/>
                </div>
                {modal && <Modal>
                    <AddToDo typeToDo={selectTable} addToDo={addToDo}/>
                </Modal>}
            </div>
        </>
    );
};

export default ToDoList;