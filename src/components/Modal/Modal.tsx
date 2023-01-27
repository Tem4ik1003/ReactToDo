import React, {useContext} from 'react';
import {ModalContext} from "../context/ModalContext";

type PropsType = {
    children?: React.ReactNode
}

const Modal = ({children}: PropsType) => {

    const {close} = useContext(ModalContext)

    return (
        <>
            <div style={{
                backgroundColor: "#000",
                opacity: "0.6",
                position: "absolute",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
            }} onClick={() => close()}>
            </div>
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
            }}>{children}</div>
        </>
    );
};

export default Modal;