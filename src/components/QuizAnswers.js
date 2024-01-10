import React from "react";

function QuizAnswers(props) {
  const { answers, index } = props;
  return (
    <div>
      {answers &&
        answers.map((a, answerIndex) => (
          <div key={answerIndex}>
            <input
              type="radio"
              id={`${index}-${answerIndex}`}
              name={`question-${index}`}
              value={a}
            />
            <label htmlFor={`${index}-${answerIndex}`}>{a}</label>
          </div>
        ))}
    </div>
  );
}

export default QuizAnswers;
