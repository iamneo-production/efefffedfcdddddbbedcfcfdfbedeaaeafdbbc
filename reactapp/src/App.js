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
        {
            key: 3,
            question: 'Who is the father of the nation?',
            options: {
                option1: 'Mahatma Gandhi',
                option2: 'Jawaharlal Nehru',
                option3: 'Donald Trump',
                option4: 'Barrack Obama'
            },
            answer: 'Mahatma Gandhi'
        },
        {
            key: 4,
            question: 'Who is the father of the nation?',
            options: {
                option1: 'Mahatma Gandhi',
                option2: 'Jawaharlal Nehru',
                option3: 'Donald Trump',
                option4: 'Barrack Obama'
            },
            answer: 'Mahatma Gandhi'
        },
        {
            key: 5,
            question: 'Who is the father of the nation?',
            options: {
                option1: 'Mahatma Gandhi',
                option2: 'Jawaharlal Nehru',
                option3: 'Donald Trump',
                option4: 'Barrack Obama'
            },
            answer: 'Mahatma Gandhi'
        }
    ];

    const [startFlag, setStartFlag] = useState(false);
    const [resetFlag, setResetFlag] = useState(false);

    function handleStart() {
        setStartFlag(true);
        setResetFlag(false);
    }

    function handleReset() {
        setStartFlag(false);
        setResetFlag(true);
    }

    let qCards = null;
    if (startFlag) {
        qCards = questionData.map((data) => (
            <Card
                key={data.key}
                question={data.question}
                options={{
                    option1: data.options.option1,
                    option2: data.options.option2,
                    option3: data.options.option3,
                    option4: data.options.option4,
                }}
            ></Card>
        ));
    }

    return (
        <div className="App">
            <h1>Quizz App</h1>
            {qCards}
            {!startFlag && <Button onClick={handleStart}>Start Quiz</Button>}
            {startFlag && !resetFlag && <Button>Show Results</Button>}
            {startFlag && resetFlag && <Button onClick={handleReset}>Start Quiz</Button>}
        </div>
    );
}

export default App;
