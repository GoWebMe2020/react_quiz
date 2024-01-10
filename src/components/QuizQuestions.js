import React from "react";
import QuizAnswers from "./QuizAnswers";

function QuizQuestions(questions) {
  return (
    <div className="quiz-questions">
      <h2>Quiz Questions</h2>
      <div>
        {questions.questions.map((q, index) => {
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
        })}
      </div>
    </div>
  );
}

export default QuizQuestions;
