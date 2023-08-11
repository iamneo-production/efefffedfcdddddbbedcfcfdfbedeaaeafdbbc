import './App.css';
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import { useState } from 'react';

function App() {
    const questionData = [
        {
            key: 1,
            question: 'Who are the father of the nation?',
            options: {
                option1: 'Mahatma Gandhi',
                option2: 'Jawaharlal Nehru',
                option3: 'Donald Trump',
                option4: 'Barrack Obama'
            },
            answer: 'Mahatma Gandhi'
        },
        {
            key: 2,
            question: 'What color are the leaves?',
            options: {
                option1: 'Blue',
                option2: 'Red',
                option3: 'Yellow',
                option4: 'Green'
            },
            answer: 'Green'
        },
        // ... (other question data)
    ];

    const [startFlag, setStartFlag] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    function handleStart() {
        setStartFlag(true);
    }

    function handleNextQuestion() {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }

    function handleReset() {
        setStartFlag(false);
        setCurrentQuestion(0);
    }

    let qCards = null;
    if (startFlag) {
        const currentData = questionData[currentQuestion];
        qCards = (
            <Card
                key={currentData.key}
                question={currentData.question}
                options={currentData.options}
            ></Card>
        );
    }

    return (
        <div className="App">
            <h1>Quizz App</h1>
            {qCards}
            {!startFlag && <Button onClick={handleStart}>Start Quiz</Button>}
            {startFlag && currentQuestion < questionData.length - 1 && (
                <Button onClick={handleNextQuestion}>Next Question</Button>
            )}
            {startFlag && currentQuestion === questionData.length - 1 && (
                <Button onClick={handleReset}>Show Results</Button>
            )}
        </div>
    );
}

export default App;
