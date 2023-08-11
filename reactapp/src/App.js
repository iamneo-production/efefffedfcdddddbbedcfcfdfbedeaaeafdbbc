import './App.css';
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import { useState, React } from 'react';

function App() {
    const questionData = [
        // ... (your question data remains unchanged)
    ];

    const [startFlag, setStartFlag] = useState(false);

    function handleStart() {
        setStartFlag(true);
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
            {startFlag && <Button>Show Results</Button>}
        </div>
    );
}

export default App;
