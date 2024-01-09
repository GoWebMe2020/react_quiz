import React from "react";
import "./QuizForm.css";

function QuizForm({ categories, onSubmit }) {

  const capilizeString = (str) => {
     return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="quiz-form">
      <form className="shadow-lg" onSubmit={onSubmit}>
        <h3>Create Your Own Quiz</h3>
        <div className="mb-3 d-flex justify-content-start flex-column w-100">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select name="category" id="category">
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="d-flex justify-content-start align-item-center w-100">
          <div className="mb-3 d-flex justify-content-start flex-column w-50 pe-1">
            <label htmlFor="difficulty" className="form-label">
              Difficulty
            </label>
            <select name="difficulty" id="difficulty">
              {["easy", "medium", "hard"].map((difficulty) => {
                return (
                  <option key={difficulty} value={difficulty}>
                    {capilizeString(difficulty)}
                  </option>
                );
              })}
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
