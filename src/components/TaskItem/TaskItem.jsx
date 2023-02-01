import classes from './TaskItem.module.css';


function TaskItem({task}) {

    const {id, isSelected, text} = task;

    return (
        <div className={classes.TaskItem}>
            <input type="checkbox" checked={isSelected}/>
            <span className={classes.text}>
                {text}
            </span>
            <button>Delete</button>
        </div>
    );
}

export default TaskItem;