import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from "./MainNavigation.module.css"
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function MainNavigation() {
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
                    <Link to="/signup" className={`${classes.link} ${classes.signupLink}`}>
                        <li>
                            <FontAwesomeIcon icon={faHeart} />
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default MainNavigation;