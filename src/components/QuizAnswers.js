import React, { useState, useEffect } from "react";
import { decodeHtmlEntities } from "../utils/decodeHtmlEntities";
import "./QuizAnswers.css";

function QuizAnswers({ answers, correctAnswer, question, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [answers]);

  const handleAnswerChange = (question, answer, correctAnswer) => {
    setSelectedAnswer(answer);
    setTimeout(() => {
      onAnswer(question, answer, correctAnswer);
    }, 300);
  };

  return (
    <div className="quiz-answers shadow-lg">
      {answers.map((a, answerIndex) => (
        <div className="answer-option" key={answerIndex}>
          <input
            type="radio"
            id={`answer-${answerIndex}`}
            name="question"
            value={a}
            className="radio-input"
            checked={a === selectedAnswer}
            onChange={() => handleAnswerChange(question, a, correctAnswer)}
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
