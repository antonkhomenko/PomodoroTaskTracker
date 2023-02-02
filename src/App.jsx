import './styles/App.css';
import {useRef, useState} from "react";
import Timer from "./components/Timer/Timer.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import classes from "./components/TaskList/TaskList.module.css";


const data = [
    {id: 1, text: 'React is very useful library for web-development', isSelected: false},
    {id: 2, text: 'React was developed by Facebook (now known as Meta)', isSelected: false},
    {id: 3, text: 'React is the most popular JavaScript library', isSelected: false},
    {id: 4, text: 'React made web beautiful', isSelected: false},
]

function App(props) {
    const [tasks, setTasks] = useState([...data]);
    const [chosenTask, setChosenTask] = useState('');

    return (
        <div className='App'>
            <span className='quote'>Stay focus 🎯</span>
            <Timer chosenTask={chosenTask}/>
            <TaskList tasks={tasks} setTasks={setTasks} chosenTask={chosenTask} setChosenTask={setChosenTask}/>
        </div>
    );
}

export default App;