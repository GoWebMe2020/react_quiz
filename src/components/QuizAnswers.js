import React, { useState, useEffect } from "react";
import { decodeHtmlEntities } from "../utils/decodeHtmlEntities";
import "./QuizAnswers.css";

function QuizAnswers({ answers, correctAnswer, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [answers]);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
    setTimeout(() => {
      onAnswer(answer, correctAnswer);
    }, 300);
  };

  return (
    <div className="quiz-answers">
      {answers.map((a, answerIndex) => (
        <div className="answer-option" key={answerIndex}>
          <input
            type="radio"
            id={`answer-${answerIndex}`}
            name="question"
            value={a}
            className="radio-input"
            checked={a === selectedAnswer}
            onChange={() => handleAnswerChange(a)}
          />
          <label htmlFor={`answer-${answerIndex}`} className="radio-label">
            {decodeHtmlEntities(a)}
          </label>
        </div>
      ))}
    </div>
  );
}

export default QuizAnswers;
