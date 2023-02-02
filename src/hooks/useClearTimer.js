import {useEffect} from "react";

export default function useClearTimer(timeLeft, setTimeLeft, timeBegin, intervalRef, setIsStart) {
    useEffect(() => {
        if(timeLeft < 0) {
            clearInterval(intervalRef.current);
            setIsStart(false);
            setTimeLeft(timeBegin);
            alert('finish task');
        }
    },[timeLeft])
}