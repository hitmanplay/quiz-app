import React from "react";
import classes from './Header.module.css';
import StartBtn from "./StartBtn/StartBtn";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__wrapper}>
                <p className={classes.header__title}>Quizz Jambo</p>
                <p className={classes.header__subtitle}>Test Yourself</p>
                <StartBtn />
            </div>
            <img src="'./../../../public/1613217901_94-p-fon-sinyaya-kletka-113.jpg'" alt="" className={classes.header__img}/>
        </div>
    );
}

export default Header   