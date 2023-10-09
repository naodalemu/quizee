import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import classes from "./DeliveredQuestion.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DeliveredQuestion(props) {
    return (
        <div className={classes.sureContainer}>
            <div className={classes.textContainer}>
                <h2 className={classes.header}>Question Recieved <FontAwesomeIcon icon={faThumbsUp} /></h2>
                <p className={classes.description}>
                    Thank you so much! We have recieved your question and you can continue to add more!
                </p>
            </div>
            <div className={classes.buttonContainer}>
                <button className={classes.okay} onClick={props.onOkay}>You're Welcome</button>
            </div>
        </div>
    )
}

export default DeliveredQuestion;