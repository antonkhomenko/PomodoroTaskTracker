import classes from './TaskList.module.css';
import TaskListSettings from "../TaskListSettings/TaskListSettings.jsx";
import TaskItem from "../TaskItem/TaskItem.jsx";

function TaskList({tasks, setTasks}) {
    return (
        <div className={classes.TaskList}>
            <TaskListSettings setTasks={setTasks}/>
            <div className={classes.TaskListWrapper}>
                {tasks.map(t => <TaskItem task={t} key={t.id}/>)}
            </div>
        </div>
    );
}

export default TaskList;