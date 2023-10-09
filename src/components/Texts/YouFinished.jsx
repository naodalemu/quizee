import { faAward, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import classes from "./YouFinished.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function YouFinished(props) {
    return (
        <div className={classes.sureContainer}>
            <div className={classes.textContainer}>
                <h2 className={classes.header}>{props.scoreData.score > (props.scoreData.questionAmount) / 2 ? <div className={classes.congrats}><FontAwesomeIcon icon={faAward} /> Congradulations <FontAwesomeIcon icon={faAward} /></div> : <div className={classes.notToGood}><FontAwesomeIcon icon={faExclamationCircle} /> Not Looking Good <FontAwesomeIcon icon={faExclamationCircle} /></div>}</h2>
                <p className={classes.youGot}>You Got</p>
                <p className={classes.score}>{props.scoreData.score}/{props.scoreData.questionAmount}</p>
                <p className={classes.message}>{props.scoreData.score > (props.scoreData.questionAmount) / 2 ? "Keep it up" : "Try again next time"}</p>
            </div>
            <div className={classes.buttonContainer}>
                <button className={classes.goHome} onClick={props.onGoHome}>Go Home</button>
            </div>
        </div>
    )
}

export default YouFinished;