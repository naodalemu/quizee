import { useRef } from "react";
import { useState } from "react";

import classes from "./AddQuestionForm.module.css"
import Backdrop from "../UI/Backdrop";
import Modal from "../UI/Modal";
import ConfirmQuestion from "./ConfirmQuestion";
import DeliveredQuestion from "./DeliveredQuestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlugCircleExclamation, faWifi } from "@fortawesome/free-solid-svg-icons";
import { useOnlineStatus } from "../../store/OnlineStatus";

function AddQuestionForm(props) {
    const isOnline = useOnlineStatus();
    const [isConfirmed, setIsConfirmed] = useState(true);
    const [formData, setFormData] = useState({
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        answer: "",
    });

    const questionRef = useRef();
    const answerARef = useRef();
    const answerBRef = useRef();
    const answerCRef = useRef();
    const answerDRef = useRef();
    const rightAnswerRef = useRef();

    function resetHandler() {
        props.onResetConfirm();
        setFormData({
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            answer: "",
        });
    }

    function submitHandler(event) {
        event.preventDefault();

        const questionData = {
            question: formData.question,
            a: formData.a,
            b: formData.b,
            c: formData.c,
            d: formData.d,
            answer: formData.answer
        }

        if (![formData.a, formData.b, formData.c, formData.d].includes(formData.answer)) {
            setIsConfirmed(false)
        } else {
            props.onAddQuestion(questionData);
        }
    }

    const handleInputChange = (inputName, inputValue) => {
        setFormData({
            ...formData,
            [inputName]: inputValue,
        });
    };

    return (
        <div className={classes.questionForm}>
            {!isOnline ? <div><FontAwesomeIcon icon={faPlugCircleExclamation} /> You're offline, Please connect to the internet to submit questions! <FontAwesomeIcon icon={faWifi} /><br /><br /> </div> : null}
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.questionSide}>
                    <h1 className={classes.pageName}>Add a Question</h1> <br />
                    <h2 className={classes.questionSectionTitle}>Question</h2>
                    <label htmlFor="questionInput">Write the Question here</label>
                    <textarea
                        type="text"
                        onChange={(event) => handleInputChange("question", event.target.value)}
                        required
                        id="questionInput"
                        rows="12"
                        ref={questionRef}
                        value={formData.question}>
                    </textarea>
                </div>
                <div className={classes.answerSide}>
                    <h2 className={classes.answerSectionTitle}>Answer Options</h2>
                    <div>
                        <label className={classes.addQuestionlabel} htmlFor="a">A</label>
                        <input
                            className={classes.addQuestionInput}
                            type="text"
                            onChange={(event) => handleInputChange("a", event.target.value)}
                            required
                            id="a"
                            placeholder="Write the Choice for A Here"
                            ref={answerARef}
                            value={formData.a} />
                    </div>
                    <div>
                        <label className={classes.addQuestionlabel} htmlFor="b">B</label>
                        <input
                            className={classes.addQuestionInput}
                            type="text"
                            onChange={(event) => handleInputChange("b", event.target.value)}
                            required
                            id="b"
                            placeholder="Write the Choice for B Here"
                            ref={answerBRef}
                            value={formData.b} />
                    </div>
                    <div>
                        <label className={classes.addQuestionlabel} htmlFor="c">C</label>
                        <input
                            className={classes.addQuestionInput}
                            type="text"
                            onChange={(event) => handleInputChange("c", event.target.value)}
                            required
                            id="c"
                            placeholder="Write the Choice for C Here"
                            ref={answerCRef}
                            value={formData.c} />
                    </div>
                    <div>
                        <label className={classes.addQuestionlabel} htmlFor="d">D</label>
                        <input
                            className={classes.addQuestionInput}
                            type="text"
                            onChange={(event) => handleInputChange("d", event.target.value)}
                            required
                            id="d"
                            placeholder="Write the Choice for D Here"
                            ref={answerDRef}
                            value={formData.d} />
                    </div>
                    <div>
                        <label className={classes.addQuestionlabel} htmlFor="ans">Ans</label>
                        <input
                            className={classes.addQuestionInput}
                            type="text"
                            onChange={(event) => handleInputChange("answer", event.target.value)}
                            required
                            id="ans"
                            placeholder="Copy and Paste the Right Answer Here"
                            ref={rightAnswerRef}
                            value={formData.answer} />
                    </div>
                    <button className={`action`} disabled={isOnline ? false : true}>Submit</button>
                </div>
                {props.serverConfirm ? <Modal><DeliveredQuestion onOkay={resetHandler} /></Modal> : null}
                {isConfirmed === false ? <Modal><ConfirmQuestion onOkay={() => { setIsConfirmed(true) }} /></Modal> : null}
                {isConfirmed === false || props.serverConfirm ? <Backdrop /> : null}
            </form>
        </div>
    )
}

export default AddQuestionForm;