import classes from './Modal.module.css';
import {useEffect} from "react";
import Button from "../UI/Button/Button.jsx";

function Modal(
    {active, setActive, tasks, dispatch, chosenTask, setChosenTask}) {


    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    function taskComplete() {
        dispatch({
            type: 'removeCompletedTask',
            chosenTask: chosenTask,
        });
        setChosenTask('');
        setActive(false);
    }

    function taskIncomplete() {
        setActive(false);
    }


    return (
        <div className={classes.modal} onClick={() => setActive(false)}>
            <div className={classes.modal__content} onClick={(e) => e.stopPropagation()}>
                <h1>Are you finished the task ?</h1>
                <div className={classes.control}>
                    <button className={classes.btn} onClick={taskComplete}>
                        Yes 👍
                    </button>
                    <button className={classes.btn} onClick={taskIncomplete}>
                        No 👎
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;