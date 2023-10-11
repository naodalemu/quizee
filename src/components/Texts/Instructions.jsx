import { faCircleCheck, faFileText } from "@fortawesome/free-solid-svg-icons";
import classes from "./Instructions.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Instructions(props) {
    return (
        <div className={classes.sureContainer}>
            <div className={classes.textContainer}>
                <h2 className={classes.header}><FontAwesomeIcon icon={faFileText} /> Instructions</h2>
                <p className={classes.description}>Read these instructions to understand the rules of the quiz!<br/><br/></p>
                <ul>
                    <li className={classes.instructionList}>Click on the text or the dot to choose an answer.</li>
                    <li className={classes.instructionList}>Once you choose an answer you can't change your answer so choose carefully.</li>
                    <li className={classes.instructionList}>You can go back and forth but you can't choose answers for a previous qustion you've passed.</li>
                    <li className={classes.instructionList}>Do not click next or previous once you're on a question until you choose an answer and get this tick "<FontAwesomeIcon icon={faCircleCheck} className={classes.greenTick} />" or it will be considered as if you've forfeited that particular question.</li>
                </ul>
            </div>
            <div className={classes.buttonContainer}>
                <button className={classes.okay} onClick={props.onOkay}>Start</button>
            </div>
        </div>
    )
}

export default Instructions;