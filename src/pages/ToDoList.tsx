import React, {useContext, useState} from 'react';
import ToDoBlock from "../components/ToDoBlock/ToDoBlock";
import {arrayToDoTable} from "../data/ListToDoTable";
import {useListToDos} from "../hooks/ListToDos";
import Modal from "../components/Modal/Modal";
import AddToDo from "../components/Forms/AddToDo";
import {ModalContext} from "../components/context/ModalContext";

type PropsType = {
    listToDos: []
}

const ToDoList = () => {

    const {listToDos, addToDo} = useListToDos()

    const [selectTable, setSelectTable] = useState('')

    const {modal} = useContext(ModalContext)

    const toDoBlockArray = () => {
        return arrayToDoTable.map(t => <ToDoBlock title={t.name}
                                                  key={t.id}
                                                  arrayToDo={listToDos.filter((l) => l.typeToDo === t.name)}
                                                  setSelectTable={setSelectTable}
        />)
    }
    return (
        <>
            <div style={{
                backgroundColor: "#3e3e3e",
                minHeight: "100vh",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                gap: "0 5px"
            }}>
                {toDoBlockArray()}
            </div>
            {modal && <Modal>
                <AddToDo typeToDo={selectTable} addToDo={addToDo}/>
            </Modal>}
        </>
    );
};

export default ToDoList;