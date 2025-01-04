"use client";
import React, { useState } from "react";
import QuestionsForm from "../components/QuestionsForm";

const questions = [
  {
    question: "What is your name?",
    choices: ["John", "Doe", "Jane"],
    answer: "John",
  },
  {
    question: "What is your age?",
    choices: [12, 24, 30],
    answer: 24,
  },
  {
    question: "What is your favorite color?",
    choices: ["red", "green", "blue"],
    answer: "red",
  },
  {
    question: "What is your favorite food?",
    choices: ["pizza", "burger", "pasta"],
    answer: "pizza",
  },
];
const Questionnaire = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const currentQuestion = questions[questionIndex];
  const [score, setscore] = useState(0);
  return (
    <div className="flex items-center justify-center h-screen">
      {questionIndex <= questions.length - 1 ? (
        <QuestionsForm
          question={currentQuestion}
          questionNo={questionIndex + 1}
          setQuestionIndex={setQuestionIndex}
        />
      ) : (
        <h1>{score}</h1>
      )}
    </div>
  );
};

export default Questionnaire;
