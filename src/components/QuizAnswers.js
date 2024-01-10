import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
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
    }, 1500);
  };

  const isCorrect = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      return <FontAwesomeIcon icon={faCheck} className="ms-3 correct" />;
    } else {
      return <FontAwesomeIcon icon={faXmark} className="ms-3 incorrect" />;
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center mb-4">
        {selectedAnswer ? (
            <div className="answer-feedback">
              <p>
                You answered: {decodeHtmlEntities(selectedAnswer)}{" "}
                {isCorrect(selectedAnswer, correctAnswer)}
              </p>
            </div>
          ) : (
            <div className="answer-feedback">
              <p>Choose an answer</p>
            </div>
          )}
      </div>
      <div className="quiz-answers">
        <hr />
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
    </div>
  );
}

export default QuizAnswers;
