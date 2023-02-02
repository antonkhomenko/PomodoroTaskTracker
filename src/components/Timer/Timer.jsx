import classes from './Timer.module.css';
import Button from "../UI/Button/Button.jsx";
import TimerLoader from "../UI/TimerLoader/TimerLoader.jsx";
import TimerSettings from "../TimerSettings/TimerSettings.jsx";
import {useEffect, useRef, useState} from "react";
import useClearTimer from "../../hooks/useClearTimer.js";

function Timer({chosenTask, resetFunc, activeModal}) {

    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const minutes = Math.floor(timeLeft / 60);
    const seconds = Math.floor(timeLeft - minutes * 60);

    const [isStart, setIsStart] = useState(false);
    const [timeBegin, setTimeBegin] = useState(timeLeft);

    const intervalRef = useRef(0);


    //After Timer Stop
    useClearTimer(timeLeft, setTimeLeft, timeBegin, intervalRef, setIsStart, activeModal);

    function startTimer() {
        if(isStart) {
            clearInterval(intervalRef.current);
            setIsStart(false);
            return;
        }
       intervalRef.current = setInterval(() => {
           setTimeLeft(prev => prev - 1);
       }, 1000);
       setIsStart(true);
    }

    function reset() {
        setIsStart(false);
        setTimeLeft(timeBegin);
        clearInterval(intervalRef.current);
    }

    useEffect(() => {
        resetFunc.current = reset;
    }, [timeBegin]);

    const startBtnName = !isStart ? timeLeft !== timeBegin ? 'Continue' : 'Start' : 'Pause';

    return (
        <div className={classes.Timer}>
            <div className={classes.header}>
                {chosenTask
                ? <div className={classes.chosenTaskWrapper}>
                    <span className={classes.chosenTaskWrapper__title}>Working on: </span>
                    <span className={classes.chosenTaskWrapper__text}>{chosenTask}</span>
                 </div>
                : <div className={classes.chosenTaskWrapper} style={{fontWeight: 'bold'}}>Chose the task you want to work on</div>
                }
                <div className={classes.control}>
                    {startBtnName !== 'Start' &&
                        <Button onClick={reset}>Reset</Button>
                    }
                    <Button onClick={startTimer}>{startBtnName}</Button>
                </div>
            </div>
            <TimerLoader minutes={minutes} seconds={seconds} a={timeBegin} b={timeLeft} isStart={isStart}/>
            <TimerSettings min={minutes} sec={seconds} setter={setTimeLeft} setTimeBegin={setTimeBegin}/>
        </div>
    );
}

export default Timer;