import {useEffect} from "react";

export default function useClearTimer(timeLeft, setTimeLeft, timeBegin, intervalRef, setIsStart, modal) {
    useEffect(() => {
        if(timeLeft < 0) {
            clearInterval(intervalRef.current);
            setIsStart(false);
            setTimeLeft(timeBegin);
            modal(true);
        }
    },[timeLeft])
}