import classes from './TaskItem.module.css';
import Button from "../UI/Button/Button.jsx";


function TaskItem({task, handleDelete, handleChecked}) {

    const {id, isSelected, text} = task;


    return (
        <div className={classes.TaskItem}>
            <label htmlFor={id} className={classes.fakeInput}>
                <input
                    type="radio" name='chosen'
                    checked={isSelected} onClick={handleChecked}
                    className={classes.chosenItemInput}
                    id={id}
                />
                <span className={classes.text}>
                    {text}
                </span>
            </label>
            <Button style={{backgroundColor: '#b74d4d', fontWeight: 'bold'}} onClick={handleDelete}>X</Button>
        </div>
    );
}

export default TaskItem;