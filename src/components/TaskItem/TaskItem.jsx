import classes from './TaskItem.module.css';
import Button from "../UI/Button/Button.jsx";


function TaskItem({task, handleDelete, handleSelect}) {

    const {id, isSelected, text} = task;




    return (
        <div className={classes.TaskItem}>
            <input type="checkbox" checked={isSelected} onChange={handleSelect}/>
            <span className={classes.text}>
                {text}
            </span>
            <Button style={{backgroundColor: '#b74d4d', fontWeight: 'bold'}} onClick={handleDelete}>X</Button>
        </div>
    );
}

export default TaskItem;