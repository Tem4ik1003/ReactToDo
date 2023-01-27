import React, {useState} from 'react';

const AddToDo = () => {

    const [valueTitle, setValueTitle] = useState('')

    const addNewToDo = () => {

    }

    return (
        <div>
            <form action="" style={{
                width: "300px",
                backgroundColor: "#fff",
                padding: "10px",
                textAlign: "center",
                borderRadius: "10px"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "10px"
                }}>
                    <h2 style={{
                        alignSelf: "center"
                    }}>Add New ToDos</h2>
                    <div><input style={{
                        width: "100%",
                        fontSize: "24px",
                        padding: "2px 5px",
                        borderRadius: "5px"
                    }} type="text"/></div>
                    <div style={{
                        alignSelf: "center"
                    }}><button>dfdf</button></div>
                </div>
            </form>
        </div>
    );
};

export default AddToDo;