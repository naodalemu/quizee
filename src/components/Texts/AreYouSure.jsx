import classes from "./AreYouSure.module.css"

function AreYouSure(props) {
    return (
        <div className={classes.sureContainer}>
            <div className={classes.textContainer}>
                <h2 className={classes.header}>Are you sure?</h2>
                <p className={classes.description}>Do you want to close the quiz?<br />Your progress will be lost!</p>
            </div>
            <div className={classes.buttonContainer}>
                <button className={classes.cancel} onClick={props.onCancel}>Cancel</button>
                <button className={classes.close} onClick={props.onClose}>Close</button>
            </div>
        </div>
    )
}

export default AreYouSure;