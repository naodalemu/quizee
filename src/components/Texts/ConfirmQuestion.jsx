import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ConfirmQuestion.module.css"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

function ConfirmQuestion(props) {
    return (
        <div className={classes.sureContainer}>
            <div className={classes.textContainer}>
                <h2 className={classes.header}><FontAwesomeIcon icon={faExclamationCircle} /> Right Answer Mismatch <FontAwesomeIcon icon={faExclamationCircle} /></h2>
                <p className={classes.description}>
                    Your right answer (Ans) doesn't match with any of the answers you provided (A, B, C, or D).
                    Please check if you have written the right answer correctly.
                    The most guaranteed way is to copy and pase the right answer.<br /><br />
                    Thank you for your patience!
                </p>
            </div>
            <div className={classes.buttonContainer}>
                <button className={classes.okay} onClick={props.onOkay}>Okay</button>
            </div>
        </div>
    )
}

export default ConfirmQuestion;