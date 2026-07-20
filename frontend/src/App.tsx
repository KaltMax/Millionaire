import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header.tsx'
import type { Round, Answer } from './types/quiz.ts'
import { fetchRound } from './api/quiz.ts'

function App() {
  const [round, setRound] = useState<Round | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [answerClassName, setAnswerClassName] = useState<string | undefined>(undefined);
  const [resultClassName, setResultClassName] = useState<string | undefined>(undefined);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const handleAnswerClick = (answer: Answer) => {
    setSelectedAnswer(answer);
    setAnswerClassName(answer.isCorrect ? 'correctAnswerButton' : 'wrongAnswerButton');
    setResultClassName(answer.isCorrect ? 'correctResult' : 'wrongResult');
    setResultMessage(answer.isCorrect ? 'Correct answer!' : 'Wrong answer!');
  };

  useEffect(() => { 
    const controller = new AbortController();

    fetchRound(controller.signal)
      .then((data) => {
        setRound(data);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.error('Error fetching round data:', error);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <Header />
      <div className="quizContainer">
        <h2 className="questionCard">{round?.question}</h2>
        <div className="answerContainer">
          {round?.answers.map((answer) => (
            <button
              key={answer.text}
              onClick={() => handleAnswerClick(answer)}
              className={selectedAnswer?.text === answer.text ? answerClassName : 'answerButton'}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
      <div className="resultCard">
        {resultMessage && (
          <p className={resultClassName}>{resultMessage}</p>
        )}
      </div>
    </>
  )
}

export default App
