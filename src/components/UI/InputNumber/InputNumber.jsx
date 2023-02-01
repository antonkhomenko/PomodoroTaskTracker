import classes from './InputNumber.module.css';
import {useRef, useState} from "react";
import getPadTime from "../../helpers/getPadTime.js";


function InputNumber({value, setValue}) {

    const intervalRef = useRef(0);

    function increase(e) {
        e.preventDefault();
        setValue(prev => prev + 1);
    }

    function decrease(e) {
        e.preventDefault();
        if(value === 0) return;
        setValue(prev => prev - 1);
    }

    function handleMouseIncrease() {
         intervalRef.current = setInterval(() => {
            setValue(prev => prev + 1);
        }, 100)
    }

    function handleMouseUpIncrease() {
        clearInterval(intervalRef.current);
    }

    function handleMouseDecrease() {
        intervalRef.current = setInterval(() => {
            setValue(prev => prev - 1);
        }, 50)
    }

    function handleMouseUpDecrease() {
        clearInterval(intervalRef.current);
    }

    return (
        <div className={classes.NumberInput}>
            <input
                type="number"
                min='0'
                max='99'
                className={classes.input}
                value={getPadTime(value)}
            />
            <div className={classes.control}>
                <button onClick={increase} onMouseDown={handleMouseIncrease} onMouseUp={handleMouseUpIncrease}>▲</button>
                <button onClick={decrease} onMouseDown={handleMouseDecrease} onMouseUp={handleMouseUpDecrease}>▼</button>
            </div>
        </div>
    );
}

export default InputNumber;