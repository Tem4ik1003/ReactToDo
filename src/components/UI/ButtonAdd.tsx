import React from 'react';

type PropsType = {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonAdd = ({onClick}: PropsType) => {
    return (
            <button style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer"
            }} onClick={onClick}>+</button>
    );
};

export default ButtonAdd;