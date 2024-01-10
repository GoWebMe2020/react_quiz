import React from "react";
import QuizAnswers from "./QuizAnswers";
import { decodeHtmlEntities } from "../utils/decodeHtmlEntities";
import "./QuizQuestions.css";

function QuizQuestions({ questions, currentQuestionIndex, onAnswer }) {
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-question">
      <h3>{questions[0].category}</h3>
      <h3>{currentQuestionIndex} / {questions.length}</h3>
      <div>
        {currentQuestion && (
          <fieldset>
            <legend className="mb-5">{decodeHtmlEntities(currentQuestion.question)}</legend>
            <QuizAnswers
              answers={[
                ...currentQuestion.incorrect_answers,
                currentQuestion.correct_answer,
              ]}
              correctAnswer={currentQuestion.correct_answer}
              onAnswer={onAnswer}
            />
          </fieldset>
        )}
      </div>
    </div>
  );
}

export default QuizQuestions;
