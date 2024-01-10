import React, { useState, useEffect } from "react";

function QuizAnswers({ answers, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [answers]);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
    setTimeout(() => {
      onAnswer();
    }, 300);
  };

  return (
    <div>
      {answers.map((a, answerIndex) => (
        <div key={answerIndex}>
          <input
            type="radio"
            id={`answer-${answerIndex}`}
            name="question"
            value={a}
            checked={a === selectedAnswer}
            onChange={() => handleAnswerChange(a)}
          />
          <label htmlFor={`answer-${answerIndex}`}>{a}</label>
        </div>
      ))}
    </div>
  );
}

export default QuizAnswers;
