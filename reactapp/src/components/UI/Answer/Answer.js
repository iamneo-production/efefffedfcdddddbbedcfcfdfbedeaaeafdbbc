import React from "react";
import Button from "../Button/Button";

const Answer = ({count})=>{
    return(
        <div>
            <h1>Quizz App</h1>
            <h4>You have answered {count}/5 correctly</h4>
            <Button >Start Quiz</Button>
        </div>
    )
}