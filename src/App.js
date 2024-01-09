import React, { useState, useEffect } from "react";
import QuizForm from "./components/QuizForm";
import axios from "axios";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_QUIZ_CATEGORY_URL);
        setCategories(response.data.trivia_categories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const category = formData.get('category');
    const difficulty = formData.get('difficulty');
    const amount = formData.get('amount');

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_QUIZ_QUESTIONS}?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      setQuestions(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <QuizForm categories={categories} onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
