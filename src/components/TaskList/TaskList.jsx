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

    function selectItem(task, event) {
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
                            handleChecked={(e) => selectItem(t, e)}
                    />
                })}
            </form>
        </div>
    );
}

export default TaskList;