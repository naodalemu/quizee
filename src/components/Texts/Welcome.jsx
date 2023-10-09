import classes from "./Welcome.module.css"
import { useOnlineStatus } from "../../store/OnlineStatus";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlugCircleExclamation } from "@fortawesome/free-solid-svg-icons";

function Welcome() {
    const isOnline = useOnlineStatus();
    const navigate = useNavigate();
    const [visibility, setVisibility] = useState(false);

    function errorHandler() {
        if (isOnline) {
            navigate("/questions")
            setVisibility(false)
        } else {
            setVisibility(true)
        }
    }

    return (
        <div className={classes.landing}>
            {visibility && !isOnline ? <div className={classes.offlineMessage}><FontAwesomeIcon icon={faPlugCircleExclamation} /> Please connect to the internet to start the quiz! <FontAwesomeIcon icon={faPlugCircleExclamation} /> <br /> use the navigation bar to know your online status anytime </div> : null}
            <h1 className={classes.welcome}>Welcome to<br /><span>Quizee</span></h1>
            <h3 className={classes.moto}>Where the real test of your briliance happens</h3>
            <button className="action" onClick={errorHandler}>Start a Quiz</button>
        </div>
    )
}

export default Welcome;