import classes from './TimerSettings.module.css';
import {useEffect, useState} from "react";
import Button from "../UI/Button/Button.jsx";
import InputNumber from "../UI/InputNumber/InputNumber.jsx";


function TimerSettings({min, sec, setter, setTimeBegin}) {

    const [showSettings, setShowSettings] = useState(false);

    const [minutes, setMinutes] = useState(min);
    const [seconds, setSeconds] = useState(sec);

    useEffect(() => {
        if(minutes < 0) {
            setMinutes(0);
        }
        if(seconds < 0) {
            setSeconds(0);
        }
    }, [minutes, seconds]);


    function setTime(e) {
        e.preventDefault();
        const newTime = minutes * 60 + seconds;
        setter(newTime);
        setTimeBegin(newTime);
    }


    const settings = (
        <form className={classes.settingsForm}>
            <div className={classes.timeWrapper}>
                <InputNumber
                    value={minutes}
                    setValue={setMinutes}
                />
                <span>:</span>
                <InputNumber
                    value={seconds}
                    setValue={setSeconds}
                />
            </div>
            <Button type='submit' onClick={setTime}>Confirm</Button>
        </form>
    );


    return (
        <div className={classes.wrapper}>
            <button
                className={classes.showSettingsBtn}
                onClick={() => setShowSettings(!showSettings)}
            >
                Settings {showSettings ? '▲' : '▼'}
            </button>
            {showSettings && settings}
        </div>
    );
}

export default TimerSettings;