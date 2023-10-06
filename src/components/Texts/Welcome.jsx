import { Link } from "react-router-dom";
import classes from "./Welcome.module.css"

function Welcome() {
    function startButtonHandler() {

    }

    return (
        <div className={classes.landing}>
            <h1 className={classes.welcome}>Welcome to<br /><span>Quizee</span></h1>
            <h3 className={classes.moto}>Where the real test of your briliance happens</h3>
            <Link to="/questions">
                <button className="action" onClick={startButtonHandler}>Start a Quiz</button>
            </Link>
        </div>
    )
}

export default Welcome;