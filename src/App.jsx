import './styles/App.css';
import {useReducer, useRef, useState} from "react";
import Timer from "./components/Timer/Timer.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import classes from "./components/TaskList/TaskList.module.css";
import Modal from "./components/Modal/Modal.jsx";
import taskReducer from "./components/Reducers/taskReducer.js";



function App(props) {
    // const [tasks, setTasks] = useState([]);
    const [tasks, dispatchTasks] = useReducer(taskReducer, []);
    const [chosenTask, setChosenTask] = useState('');
    const [modalActive, setModalActive] = useState(false);
    const resetTimer = useRef(null);

    return (
        <div className='App'>
            {modalActive &&
                <Modal
                    active={modalActive} setActive={setModalActive}
                    tasks={tasks}   dispatch={dispatchTasks}
                    chosenTask={chosenTask} setChosenTask={setChosenTask}
                />
            }
            <span className='quote'>Stay focus 🎯</span>
            <Timer chosenTask={chosenTask} resetFunc={resetTimer} activeModal={setModalActive}/>
            <TaskList
                tasks={tasks} dispatch={dispatchTasks}
                chosenTask={chosenTask} setChosenTask={setChosenTask}
                resetTimer={resetTimer}
            />
        </div>
    );
}

export default App;