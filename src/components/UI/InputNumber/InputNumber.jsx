import classes from './InputNumber.module.css';
import {useEffect, useRef, useState} from "react";
import getPadTime from "../../../helpers/getPadTime.js";


function InputNumber({value, setValue, position}) {

    const intervalRef = useRef([]);


    function increase(e) {
        e.preventDefault();
        setValue(value + 1);
    }

    function decrease(e) {
        e.preventDefault();
        setValue(value - 1);
    }

    function handleMouseIncrease() {
         const intervalID = setInterval(() => {
            setValue(prev => prev + 1);
        }, 100);
         intervalRef.current.push(intervalID);
    }

    function handleMouseUpIncrease() {
        intervalRef.current.forEach(item => clearInterval(item));
        intervalRef.current = [];
    }

    function handleMouseDecrease() {
        const intervalID = setInterval(() => {
            setValue(prev => prev - 1);
        }, 100);
        intervalRef.current.push(intervalID);
    }

    function handleMouseUpDecrease() {
        intervalRef.current.forEach(item => clearInterval(item));
        intervalRef.current = [];
    }

    function handleContext(e) {
        e.preventDefault();
    }

    function handleLeave(e) {
        intervalRef.current.forEach(item => clearInterval(item));
        intervalRef.current = [];
    }


    const controlLeftClass = [classes.control, classes.controlLeft];

    return (
        <div className={classes.NumberInput}>
            {position === 'left' &&
                <div className={controlLeftClass.join(' ')}>
                    <button
                        onClick={increase}
                        onMouseDown={handleMouseIncrease}
                        onMouseUp={handleMouseUpIncrease}
                        onContextMenu={handleContext}
                        onMouseLeave={handleLeave}
                    >▲</button>
                    <button
                        onClick={decrease}
                        onMouseDown={handleMouseDecrease}
                        onMouseUp={handleMouseUpDecrease}
                        onContextMenu={handleContext}
                        onMouseLeave={handleLeave}
                    >▼</button>
                </div>
            }
            <div className={classes.valueBlock}>
                {getPadTime(value)}
            </div>
            {position === 'right' &&
                <div className={classes.control}>
                    <button
                        onClick={increase}
                        onMouseDown={handleMouseIncrease}
                        onMouseUp={handleMouseUpIncrease}
                        onContextMenu={handleContext}
                        onMouseLeave={handleLeave}
                    >▲</button>
                    <button
                        onClick={decrease}
                        onMouseDown={handleMouseDecrease}
                        onMouseUp={handleMouseUpDecrease}
                        onContextMenu={handleContext}
                        onMouseLeave={handleLeave}
                    >▼</button>
                </div>
            }
        </div>
    );
}

export default InputNumber;