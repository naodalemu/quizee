import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

function MyFavorite() {
    return (
        <div style={{textAlign: "center", fontSize: "20px"}}>
            <FontAwesomeIcon icon={ faAdd } /> <br />
            Add Favorites
        </div>
    )
}

export default MyFavorite;