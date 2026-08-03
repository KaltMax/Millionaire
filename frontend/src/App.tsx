import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header.tsx';
import type { Round, Answer } from '@millionaire/shared';
import { fetchRound, submitGuess } from './api/quiz.ts';

function App() {
  const [round, setRound] = useState<Round | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [answerClassName, setAnswerClassName] = useState<string | undefined>(
    undefined,
  );
  const [resultClassName, setResultClassName] = useState<string | undefined>(
    undefined,
  );
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [correctAnswerId, setCorrectAnswerId] = useState<number | null>(null);

  const handleAnswerClick = async (answer: Answer) => {
    if (!round || selectedAnswer) return; // Ignore clicks if no round is loaded or an answer has already been selected
    setSelectedAnswer(answer);

    try {
      const result = await submitGuess(round.id, answer.id);
      setAnswerClassName(
        result.correct ? 'correctAnswerButton' : 'wrongAnswerButton',
      );
      setResultClassName(result.correct ? 'correctResult' : 'wrongResult');
      setResultMessage(result.correct ? 'Correct answer!' : 'Wrong answer!');
      setCorrectAnswerId(result.correctAnswerId);
    } catch (error) {
      console.error('Error submitting guess:', error);
    }
  };

  const getButtonClassName = (answer: Answer): string => {
    if (correctAnswerId === answer.id) {
      return 'correctAnswerButton';
    } else if (selectedAnswer?.id === answer.id) {
      return answerClassName || 'answerButton';
    } else {
      return 'answerButton';
    }
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
              key={answer.id}
              onClick={() => handleAnswerClick(answer)}
              className={getButtonClassName(answer)}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
      <div className="resultCard">
        {resultMessage && <p className={resultClassName}>{resultMessage}</p>}
      </div>
    </>
  );
}

export default App;
