"use client";
import React from "react";

const QuestionsForm = ({ question, questionNo, setQuestionIndex }) => {
  const handleSubmit = () => {
    setQuestionIndex((prev) => prev + 1);
  };

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <section>
      <h1 className="text-2xl">Questions No {questionNo}</h1>
      <fieldset className="">
        <legend className="text-3xl mb-5">{question.question}</legend>
        {question.choices.map((choice, index) => {
          return (
            <>
              <input
                id={choice}
                className=""
                type="radio"
                name="status"
                onClick={(e) => handleChange(e.target.value)}
              />
              <label htmlFor={choice} className="mr-4">
                {choice}
              </label>
            </>
          );
        })}
        <button
          disabled={questionNo === 4}
          className="p-3 block mt-5 bg-white text-black hover:text-white hover:bg-slate-900 transition-all rounded-xl disabled:opacity-50"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </fieldset>
    </section>
  );
};

export default QuestionsForm;
