import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_QUIZ_CATEGORY_URL
        );
        setCategories(response.data.trivia_categories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newDifficulty = event.target.difficulty.value;
    const newCategory = event.target.category.value;
    const newAmount = event.target.amount.value;

    setDifficulty(newDifficulty);
    setCategory(newCategory);
    setAmount(newAmount);
  }

  useEffect(() => {
    if (category && difficulty && amount) {
      fetchQuestions(amount, category, difficulty);
    }
  }, [category, difficulty, amount]);

  const fetchQuestions = async (amount, category, difficulty) => {
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      setQuestions(response.data.results);
      console.log(response.data.results)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="quiz-form">
        <form className="shadow-lg" onSubmit={handleFormSubmit}>
          <h3>Create Your Own Quiz</h3>
          <div className="mb-3 d-flex justify-content-start flex-column w-100">
            <label htmlFor="category" className="form-label">Category</label>
            <select name="category" id="category">
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>{category.name}</option>
                )
              })}
            </select>
          </div>
          <div className="d-flex justify-content-start align-item-center w-100">
            <div className="mb-3 d-flex justify-content-start flex-column w-50 pe-1">
              <label htmlFor="difficulty" className="form-label">Difficulty</label>
              <select name="difficulty" id="difficulty">
                {["easy", "medium", "hard"].map((difficulty) => {
                  return (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  )
                })}
              </select>
            </div>
            <div className="mb-3 d-flex justify-content-start flex-column w-50 ps-1">
              <label htmlFor="amount" className="form-label">Number of Questions</label>
              <input type="number" name="amount" id="amount" defaultValue={amount} />
            </div>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
