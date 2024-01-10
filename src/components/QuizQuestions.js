import React from "react";
import QuizAnswers from "./QuizAnswers";

function QuizQuestions({ questions, currentQuestionIndex, onAnswer }) {
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-questions">
      <h2>Quiz Questions</h2>
      <div>
        {currentQuestion && (
          <fieldset>
            <legend>{currentQuestion.question}</legend>
            <QuizAnswers
              answers={[
                ...currentQuestion.incorrect_answers,
                currentQuestion.correct_answer,
              ]}
              onAnswer={onAnswer}
            />
          </fieldset>
        )}
        {/* {questions.questions.map((q, index) => {
          const answers = [...q.incorrect_answers, q.correct_answer];
          answers.sort(() => Math.random() - 0.5);

          return (
            <fieldset key={index}>
              <legend>{q.question}:</legend>
              <div>
                <QuizAnswers answers={answers} index={index} />
              </div>
            </fieldset>
          );
        })} */}
      </div>
    </div>
  );
}

export default QuizQuestions;
