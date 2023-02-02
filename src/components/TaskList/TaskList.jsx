import classes from './TaskList.module.css';
import TaskListSettings from "../TaskListSettings/TaskListSettings.jsx";
import TaskItem from "../TaskItem/TaskItem.jsx";

function TaskList({tasks, setTasks, chosenTask, setChosenTask, resetTimer}) {

    function deleteItem(task) {
        const filtratedTasks = tasks.filter(item => {
            if(item.id === task.id && task.text === chosenTask) {
                setChosenTask('');
                resetTimer.current();
            }
            return item.id !== task.id;
        });
        setTasks(filtratedTasks);
    }

    function selectItem(task) {
       const filtratedTasks = tasks.map(item => {
           if(task.id === item.id) {
               if(item.isSelected) {
                   item.isSelected = false;
                   setChosenTask('');
               } else {
                   item.isSelected = true;
                   setChosenTask(item.text);
               }
           } else {
               item.isSelected = false;
           }
           return item;
       });
       setTasks(filtratedTasks);
    }

    return (
        <div className={classes.TaskList}>
            <TaskListSettings setTasks={setTasks}/>
            <form className={classes.TaskListWrapper}>
                {tasks.map(t => {
                    return <TaskItem
                            task={t} key={t.id}
                            handleDelete={() => deleteItem(t)}
                            handleChecked={() => selectItem(t)}
                    />
                })}
            </form>
        </div>
    );
}

export default TaskList;