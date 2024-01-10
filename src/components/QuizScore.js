import React from "react";
import "./QuizScore.css";

function QuizScore(props) {
  const { score, totalQuestions } = props;

  const calPercentage = (score, totalQuestions) => {
    return (score / totalQuestions) * 100;
  };

  return (
    <div className="quiz-score">
      <h2>You achieved {calPercentage(score, totalQuestions)}%</h2>
    </div>
  );
}

export default QuizScore;
