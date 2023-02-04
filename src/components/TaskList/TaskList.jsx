import classes from './TaskList.module.css';
import TaskListSettings from "../TaskListSettings/TaskListSettings.jsx";
import TaskItem from "../TaskItem/TaskItem.jsx";

function TaskList({tasks, dispatch, chosenTask, setChosenTask, resetTimer}) {

    function deleteItem(task) {
        if(task.text === chosenTask) {
            setChosenTask('');
            resetTimer.current();
        }
        dispatch({
            type: 'deleteItem',
            id: task.id,
        });
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
       dispatch({
           type: 'selectItem',
           item: filtratedTasks,
       });
    }

    return (
        <div className={classes.TaskList}>
            <TaskListSettings dispatch={dispatch}/>
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