import classes from './TimerLoader.module.css';
import getPadTime from "../../../helpers/getPadTime.js";


function TimerLoader({minutes, seconds, a, b, isStart}) {

    let loaderWidth = Math.floor(Math.abs((a - b) / ((a + b) / 2)) * 50);

    // if(!isStart) {
    //     loaderWidth = 0;
    // }

    return (
        <div className={classes.wrapper}>
            <span className={classes.data}>
                {getPadTime(minutes)} : {getPadTime(seconds)}
            </span>
            <div className={classes.loader} style={{width: `${loaderWidth}%`}}/>
        </div>
    );
}

export default TimerLoader;