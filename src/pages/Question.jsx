import { useEffect, useState } from "react";

import Layout from "../components/Layout/Layout";
import QuestionCard from "../components/Questions/QuestionCard";

function Questions() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedQuestions, setLoadedQuestions] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            "https://quizee-react-app-default-rtdb.firebaseio.com/questions.json"
        ).then(response => {
            return response.json();
        }).then(data => {
            const questions = []

            for (const key in data) {
                const question = {
                    id: key,
                    ...data[key]
                };

                questions.push(question);
            }
            setIsLoading(false);
            setLoadedQuestions(questions);
        })
    }, [])


    return (
        <Layout>
            <QuestionCard isLoading={isLoading} loadedQuestions={loadedQuestions} />
        </Layout>
    )
}

export default Questions;