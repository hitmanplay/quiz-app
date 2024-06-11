import React, { useState } from "react";
import classes from './Header.module.css';
import Module from "./Module/Module";

const Header = () => {
    const [modal, setModal] = useState(false);

    return (
        <div className={classes.header}>
            <div className={classes.header__wrapper}>
                <p className={classes.header__title}>Quizz App</p>
                <p className={classes.header__subtitle}>Test Yourself</p>
                <button className={classes.header__start} onClick={() => setModal(true)}>Start</button>
                <Module visible={modal} setVisible={setModal}></Module>
            </div>
            <img src="'./../../../public/1613217901_94-p-fon-sinyaya-kletka-113.jpg'" alt="" className={classes.header__img}/>
        </div>
    );
}

export default Header   