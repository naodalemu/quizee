import { useState } from "react";

import Layout from "../components/Layout/Layout";
import AddQuestionForm from "../components/Texts/AddQuestionForm";

function AddQuestion() {
    const [ serverConfirm, setServerConfirm ] = useState(false);

    function resetServerConfirm() {
        setServerConfirm(false)
    }

    function addQuestionHandler(questionData) {
        fetch(
            "https://quizee-react-app-default-rtdb.firebaseio.com/questions.json",
            {
                method: "POST",
                body: JSON.stringify(questionData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(() => {
            setServerConfirm(true)
        })
    }

    return (
        <div>
            <Layout>
                <AddQuestionForm onAddQuestion={addQuestionHandler} serverConfirm={serverConfirm} onResetConfirm={resetServerConfirm} />
            </Layout>
        </div>
    )
}

export default AddQuestion;