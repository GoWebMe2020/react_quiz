import React, { useState, useEffect } from "react";
import QuizForm from "./components/QuizForm";
import { fetchCategories, fetchQuestions } from "./utils/quizServices";
import "./App.css";
import QuizQuestions from "./components/QuizQuestions";
import QuizScore from "./components/QuizScore";

function App() {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const initFetch = async () => {
      try {
        const categoryData = await fetchCategories();
        setCategories(categoryData);
      } catch (error) {
        console.log(error);
      }
    };

    initFetch();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const category = formData.get("category");
    const difficulty = formData.get("difficulty");
    const amount = formData.get("amount");

    try {
      const questionsData = await fetchQuestions(amount, category, difficulty);
      setQuestions(questionsData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAnswer = (question, answer, correctAnswer) => {
    console.log("Question " + question);
    console.log("Answer " + answer);
    console.log("Correct Answer " + correctAnswer);
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { question, answer, correctAnswer },
    ]);
    if (answer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="App">
      <QuizForm categories={categories} onSubmit={handleFormSubmit} />
      {currentQuestionIndex === questions.length && questions.length > 0 ? (
        <QuizScore
          score={score}
          totalQuestions={questions.length}
          answers={answers}
        />
      ) : questions.length > 0 ? (
        <QuizQuestions
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          onAnswer={handleAnswer}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
