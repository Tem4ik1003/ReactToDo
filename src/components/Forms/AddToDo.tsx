import React, {useContext, useState} from 'react';
import {ModalContext} from "../context/ModalContext";

type PropsType = {
    typeToDo: string
    addToDo: (title:string, typeToDo:string) => void
}

const AddToDo = ({addToDo, typeToDo}: PropsType) => {

    const [valueTitle, setValueTitle] = useState('')

    const {close} = useContext(ModalContext)

    const onCreateToDo = () => {
        addToDo(valueTitle, typeToDo)
        close()
    }

    return (
        <div style={{
            width: "300px",
            backgroundColor: "#fff",
            padding: "10px",
            textAlign: "center",
            borderRadius: "10px"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px"
            }}>
                <h2 style={{
                    alignSelf: "center"
                }}>Add New ToDos</h2>
                <div>
                    <input style={{
                        width: "100%",
                        fontSize: "24px",
                        padding: "2px 5px",
                        borderRadius: "5px"
                    }} type="text"
                           onChange={(e) => setValueTitle(e.target.value)}
                           value={valueTitle}/>
                </div>
                <button onClick={onCreateToDo}>Add</button>
            </div>
        </div>
    );
};

export default AddToDo;