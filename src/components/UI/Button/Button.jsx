import classes from './Button.module.css';

function Button({children, ...props}) {
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    );
}

export default Button;