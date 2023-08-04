import React from "react";
import Button from "../Button/Button";
import App from "../../../App";



const Answer = ({count})=>{

    const handleStartQuiz=()=>{
        <App/>
    }
    return(
        <div>
            <h1>Quizz App</h1>
            <h4>You have answered {count}/5 correctly</h4>
            <Button onClick={handleStartQuiz}>Start Quiz</Button>
        </div>
    )
}

export default Answer;