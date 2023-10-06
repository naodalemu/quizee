import MainNavigation from "../UI/MainNavigation";

import classes from "./Layout.module.css"
import Card from "../UI/Card";

function Layout(props) {
    return (
        <div className={classes.theDiv}>
                <MainNavigation />
            <Card>
                {props.children}
            </Card>
        </div>
    )
}

export default Layout;