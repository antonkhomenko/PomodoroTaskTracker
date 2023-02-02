import classes from './TaskList.module.css';
import TaskListSettings from "../TaskListSettings/TaskListSettings.jsx";
import TaskItem from "../TaskItem/TaskItem.jsx";

function TaskList({tasks, setTasks, chosenTask, setChosenTask}) {

    function deleteItem(task) {
        const filtratedTasks = tasks.filter(item => {
            return item.id !== task.id;
        });
        setTasks(filtratedTasks);
    }

    function selectItem(task) {
        if(!task.isSelected && chosenTask) return;
        const filtratedTasks = tasks.map(item => {
            if(item.id === task.id) {
                if(!task.isSelected) {
                    task.isSelected = true;
                    setChosenTask(task.text);
                } else {
                    task.isSelected = false;
                    setChosenTask('');
                }
            }
            return item;
        });
        setTasks(filtratedTasks);
    }

    return (
        <div className={classes.TaskList}>
            <TaskListSettings setTasks={setTasks}/>
            <div className={classes.TaskListWrapper}>
                {tasks.map(t => {
                    return <TaskItem
                            task={t} key={t.id}
                            handleDelete={() => deleteItem(t)}
                            handleSelect={() => selectItem(t)}
                    />
                })}
            </div>
        </div>
    );
}

export default TaskList;