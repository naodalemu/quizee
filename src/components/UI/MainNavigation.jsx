import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from "./MainNavigation.module.css"
import { faPlugCircleExclamation, faWifi } from "@fortawesome/free-solid-svg-icons";
import { useOnlineStatus } from "../../store/OnlineStatus";

function MainNavigation() {
    const isOnline = useOnlineStatus();

    return (
        <nav className={classes.navigationBar}>
            <div className={classes.logo}>
                Quizee
            </div>
            <div>
                <ul className={classes.linkLists}>
                    <Link to="/" className={classes.link}>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to="/addquestion" className={classes.link}>
                        <li>
                            Add Questions
                        </li>
                    </Link>
                    <Link className={`${classes.link} ${classes.signalLink}`}>
                        <li>
                            {!isOnline ? <div><FontAwesomeIcon icon={faPlugCircleExclamation} /> Offline</div> : <div><FontAwesomeIcon icon={faWifi} /> Online</div>}
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default MainNavigation;