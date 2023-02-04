import classes from './TaskListSettings.module.css';
import Button from "../UI/Button/Button.jsx";
import {useState} from "react";


function TaskListSettings({dispatch}) {

    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: 'addItem',
            text: text,
        });
        setText('');
    }

    return (
        <form className={classes.SettingsForm} onSubmit={handleSubmit}>
            <input
                className={classes.SettingsInput}
                type="text"
                placeholder='Type your new task here'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button type='submit'>Add Task</Button>
        </form>
    );
}

export default TaskListSettings;