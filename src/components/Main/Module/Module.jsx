import React from "react";
import cl from './Module.module.css';
import Form from "../Form/Form";

const Module = ({children, visible, setVisible}) => {

    const rootClasses = [cl.modal]
    if(visible){
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
                <Form />
            </div>
        </div>
    );
}

export default Module;