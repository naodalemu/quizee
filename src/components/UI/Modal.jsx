import classes from "./Modal.module.css"

function Modal(props) {
    return (
        <div className={classes.modalContainer}>
            {props.children}
        </div>
    )
}

export default Modal;