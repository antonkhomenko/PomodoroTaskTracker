import './styles/App.css';
import {useRef, useState} from "react";
import Timer from "./components/Timer/Timer.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import classes from "./components/TaskList/TaskList.module.css";
import Modal from "./components/Modal/Modal.jsx";



function App(props) {
    const [tasks, setTasks] = useState([]);
    const [chosenTask, setChosenTask] = useState('');
    const [modalActive, setModalActive] = useState(false);
    const resetTimer = useRef(null);

    return (
        <div className='App'>
            {modalActive &&
                <Modal
                    active={modalActive} setActive={setModalActive}
                    tasks={tasks}   setTasks={setTasks}
                    chosenTask={chosenTask} setChosenTask={setChosenTask}
                />
            }
            <span className='quote'>Stay focus 🎯</span>
            <Timer chosenTask={chosenTask} resetFunc={resetTimer} activeModal={setModalActive}/>
            <TaskList
                tasks={tasks} setTasks={setTasks}
                chosenTask={chosenTask} setChosenTask={setChosenTask}
                resetTimer={resetTimer}
            />
        </div>
    );
}

export default App;