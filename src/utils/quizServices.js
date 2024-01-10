import axios from "axios";

export const fetchCategories = async () => {
  const response = await axios.get(process.env.REACT_APP_QUIZ_CATEGORY_URL);
  return response.data.trivia_categories;
};

export const fetchQuestions = async (amount, category, difficulty) => {
  const response = await axios.get(
    `${process.env.REACT_APP_QUIZ_QUESTIONS}?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  );
  return response.data.results;
};
