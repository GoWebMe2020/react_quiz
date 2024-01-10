import React from "react";
import "./QuizForm.css";

function QuizForm({ categories, onSubmit }) {
  const capitalizeString = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const renderCategories = () => {
    return categories.map((category) => (
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    ));
  };

  const renderDifficulties = () => {
    return ["easy", "medium", "hard"].map((difficulty) => (
      <option key={difficulty} value={difficulty}>
        {capitalizeString(difficulty)}
      </option>
    ));
  };

  return (
    <div className="quiz-form">
      <form className="shadow-lg" onSubmit={onSubmit}>
        <h3>Create Your Own Quiz</h3>
        <div className="mb-3 d-flex justify-content-start flex-column w-100">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select name="category" id="category">
            {renderCategories()}
          </select>
        </div>
        <div className="d-flex justify-content-start align-item-center w-100">
          <div className="mb-3 d-flex justify-content-start flex-column w-50 pe-1">
            <label htmlFor="difficulty" className="form-label">
              Difficulty
            </label>
            <select name="difficulty" id="difficulty">
              {renderDifficulties()}
            </select>
          </div>
          <div className="mb-3 d-flex justify-content-start flex-column w-50 ps-1">
            <label htmlFor="amount" className="form-label">
              Number of Questions
            </label>
            <input type="number" name="amount" id="amount" defaultValue={10} />
          </div>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default QuizForm;
