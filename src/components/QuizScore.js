import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { decodeHtmlEntities } from "../utils/decodeHtmlEntities";
import "./QuizScore.css";

function QuizScore(props) {
  const { score, totalQuestions, answers } = props;

  console.log(answers);

  const calPercentage = (score, totalQuestions) => {
    return (score / totalQuestions) * 100;
  };

  const isCorrect = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      return <FontAwesomeIcon icon={faCheck} className="ms-3 correct" />;
    } else {
      return <FontAwesomeIcon icon={faXmark} className="ms-3 incorrect" />
    }
  }

  return (
    <div className="quiz-score shadow-lg">
      <h2>You achieved {calPercentage(score, totalQuestions)}%</h2>
      <div className="all-answers">
        {answers.map((answer, index) => {
          return (
            <div key={index} className="answer">
              <p>
                {index + 1}. {decodeHtmlEntities(answer.question)}
              </p>
              <p className="ms-5">
                Your answer: {decodeHtmlEntities(answer.answer)} | Correct answer:{" "}
                {decodeHtmlEntities(answer.correctAnswer)} {isCorrect(answer.answer, answer.correctAnswer)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuizScore;
