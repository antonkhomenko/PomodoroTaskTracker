import './styles/App.css';
import {useRef, useState} from "react";
import Timer from "./components/Timer/Timer.jsx";

function App(props) {
    const [tasks, setTasks] = useState([]);
    const [chosenTask, setChosenTask] = useState('');

    return (
        <div className='App'>
            <Timer/>
        </div>
    );
}

export default App;