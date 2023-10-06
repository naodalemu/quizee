import { useNavigate } from "react-router-dom";
import { useState } from "react";
import QuestionItem from "../Texts/QuestionItem";

import classes from "./QuestionCard.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken, faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

function QuestionCard(props) {
    const navigate = useNavigate();
    const [ value, setValue ] = useState(0);

    const questionDetails =
        [
            {
                question: "Which company developed the JavaScript library called React?",
                a: "Google",
                b: "Netflix",
                c: "Facebook",
                d: "Amazon",
                answer: "Facebook"
            },
            {
                question: "Which JavaScript method do we use to get elements by their IDs from the DOM?",
                a: "document.getElementById('Id')",
                b: "document.getElementByClassName('Id Id2')",
                c: "document.querySelector('.foobar')",
                d: "None of the above",
                answer: "document.getElementById('Id')"
            }
        ]

    function nextQuestion() {
        if (value < questionDetails.length - 1){
            setValue(value + 1)
        }
    }

    function prevQuestion() {
        if (value !== 0){
            setValue(value - 1)
        }
    }

    function closeWindow() {
        navigate("/");
    }

    return (
        <div className={classes.container}>
            <div className={classes.score}>
                <p>Score: 1/{questionDetails.length}</p>
                <p onClick={closeWindow}><FontAwesomeIcon icon={faWindowClose} /></p>
            </div>
            <QuestionItem {...questionDetails[value]}  value = {value} />
            <div className={classes.controls}>
                <button onClick={prevQuestion}><FontAwesomeIcon icon={faLeftLong} /> Prev</button>
                {value === 0 ? <button className={classes.correct}>Correct <FontAwesomeIcon icon={faHeart} /></button> : <button  className={classes.wrong}>Wrong <FontAwesomeIcon icon={faHeartBroken} /></button>}
                <button onClick={nextQuestion}>Next <FontAwesomeIcon icon={faRightLong} /></button>
            </div>
        </div>
    )
}

export default QuestionCard;