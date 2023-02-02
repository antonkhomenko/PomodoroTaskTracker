import classes from './TaskItem.module.css';
import Button from "../UI/Button/Button.jsx";


function TaskItem({task, handleDelete, handleChecked}) {

    const {id, isSelected, text} = task;


    return (
        <div className={classes.TaskItem}>
            <input type="radio" name='chosen' checked={isSelected} onClick={handleChecked}/>
            <span className={classes.text}>
                {text}
            </span>
            <Button style={{backgroundColor: '#b74d4d', fontWeight: 'bold'}} onClick={handleDelete}>X</Button>
        </div>
    );
}

export default TaskItem;