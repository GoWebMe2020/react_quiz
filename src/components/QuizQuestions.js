import React from "react";
import QuizAnswers from "./QuizAnswers";
import { decodeHtmlEntities } from "../utils/decodeHtmlEntities";
import "./QuizQuestions.css";

function QuizQuestions({ questions, currentQuestionIndex, onAnswer }) {
  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div className="quiz-question shadow-lg">
      {currentQuestion && (
        <>
          <h3>{questions[0].category}</h3>
          <h3>
            {currentQuestionIndex} / {questions.length}
          </h3>
          <fieldset>
            <legend className="mb-3">
              {decodeHtmlEntities(currentQuestion.question)}
            </legend>
            <QuizAnswers
              answers={[
                ...currentQuestion.incorrect_answers,
                currentQuestion.correct_answer,
              ]}
              correctAnswer={currentQuestion.correct_answer}
              question={currentQuestion.question}
              onAnswer={onAnswer}
            />
          </fieldset>
        </>
      )}
    </div>
  );
}

export default QuizQuestions;
