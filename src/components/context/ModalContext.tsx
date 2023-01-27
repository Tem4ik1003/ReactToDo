import React, {createContext, useState} from 'react';
import modal from "../Modal/Modal";

type ModalContextType = {
    modal: boolean,
    open: () => void,
    close: () => void
}

export const ModalContext = createContext<ModalContextType>({
    modal: false,
    open: () => {},
    close: () => {}
})

export const ModalState = ({children}: { children: React.ReactNode }) => {

    const [modal, setModal] = useState(false)

    const open = () => {
        setModal(true)
    }

    const close = () => {
        setModal(false)
    }

    return <ModalContext.Provider value={{modal, open, close}}>
        {children}
    </ModalContext.Provider>
}
