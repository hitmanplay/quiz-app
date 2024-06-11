import React from "react";
import cl from './Form.module.css';

const Form = () => {
    return (
        <form action="">
            <label htmlFor="">Choose Difficult
                <select name="" id="" className={cl.selects}>
                    <option value="">Easy</option>
                    <option value="">Medium</option>
                    <option value="">Hard</option>
                </select>
            </label>
            <label htmlFor="">Choose Theme
                <select name="" id="" className={cl.selects}>
                    <option value="">Animal</option>
                </select>
            </label>
            <button className={cl.submit}>Submit</button>
        </form>
    );
}

export default Form;