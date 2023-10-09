import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import QuestionItem from "../Texts/QuestionItem";

import classes from "./QuestionCard.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faHeart, faHeartBroken, faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import Modal from "../UI/Modal";
import Backdrop from "../UI/Backdrop";
import AreYouSure from "../Texts/AreYouSure";
import YouFinished from "../Texts/YouFinished";

function QuestionCard(props) {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);
    const [score, setScore] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isVisited, setIsVisited] = useState([])
    const [isChecked, setIsChecked] = useState(false)
    const [isRight, setIsRight] = useState(null)
    const [confirmText, setConfirmText] = useState("")
    const [confirmStyle, setConfirmStyle] = useState()
    const [confirmIcon, setConfirmIcon] = useState()
    const [tick, setTick] = useState(false)
    const [closeModalIsOpen, setCloseModalIsOpen] = useState(false)
    const [ endModalIsOpen, setEndModalIsOpen ] = useState(false)

    const questionDetails = props.loadedQuestions;

    function onCloseModal() {
        navigate("/");
    }

    function onCancelModal() {
        setCloseModalIsOpen(false);
    }

    useEffect(() => {
        if (isRight === true) {
            setConfirmText("correct")
            setConfirmStyle(classes.correct)
            setConfirmIcon(faHeart)
        } else if (isRight === false) {
            setConfirmText("Wrong")
            setConfirmStyle(classes.wrong)
            setConfirmIcon(faHeartBroken)
        } else if (isRight === null) {
            setConfirmStyle(classes.invisible)
        }
    }, [isRight])

    function onChoose(choosen) {
        if (choosen === questionDetails[value].answer) {
            setScore((score) => {
                return score + 1
            })
            setIsRight(true)
        } else {
            setIsRight(false)
        }
        setIsDisabled(true)
        setTick(true)
    }

    function nextQuestion() {
        if (value < questionDetails.length - 1) {
            setValue((value) => {
                return value + 1
            })
            if (isVisited.some(pastPage => pastPage === value) === false) {
                console.log(isVisited)
                setIsDisabled(false)
            }
        } else {
            if (endModalIsOpen) {
                navigate("/")
            } else {
                setEndModalIsOpen(true)
            }
        }
        setIsChecked(false)
        setIsRight(null)
        setTick(false)
    }

    useEffect(() => {
        setIsVisited((isVisited) => {
            return isVisited.concat(value - 1)
        })
    }, [value])


    function prevQuestion() {
        if (value !== 0) {
            setValue((value) => {
                return value - 1
            })
        }
        setIsDisabled(true)
        setIsRight(null)
    }

    function closeWindow() {
        if (isVisited.length === 1 && !tick) {
            navigate("/");
        } else {
            setCloseModalIsOpen(true);
        }
    }

    if (props.isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <div className={classes.score}>
                <p>Score: {score}/{questionDetails.length}</p>
                <p onClick={closeWindow}><FontAwesomeIcon icon={faWindowClose} /></p>
            </div>
            <QuestionItem {...questionDetails[value]} value={value} onChoose={onChoose} isDisabled={isDisabled} isChecked={isChecked} tick={tick ? <div style={{ color: "green", display: "inline" }}><FontAwesomeIcon icon={faCircleCheck} /></div> : null} />
            <div className={classes.controls}>
                <button className={classes.controlerButton} onClick={prevQuestion}><FontAwesomeIcon icon={faLeftLong} /> Prev</button>
                <button className={confirmStyle}>{confirmText} <FontAwesomeIcon icon={confirmIcon} /></button>
                <button className={classes.controlerButton} onClick={nextQuestion}>{value < questionDetails.length - 1 ? "Next" : "Finish"} <FontAwesomeIcon icon={faRightLong} /></button>
            </div>
            {endModalIsOpen && <Modal><YouFinished onGoHome={nextQuestion} scoreData = {{score: score, questionAmount: questionDetails.length}} /></Modal>}
            {closeModalIsOpen && <Modal><AreYouSure onClose={onCloseModal} onCancel={onCancelModal} /></Modal>}
            {(closeModalIsOpen || endModalIsOpen) && <Backdrop onCancel={onCancelModal}/>}
        </div>
    )
}

export default QuestionCard;