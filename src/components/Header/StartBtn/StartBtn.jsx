import React from "react";
import classes from './../Header.module.css'

const StartBtn = () => {
    function StartBtn(){
        console.log('pressed')
    }

    return (
        <button className={classes.header__start} onClick={StartBtn}>Start</button>
    );
}

export default StartBtn;