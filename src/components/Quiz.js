import { useState } from "react";
import { Link } from "react-router-dom";

import questions from "../questions";

import "../App.css";

const Quiz = () => {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([
    "scalene",
    "equilateral",
    "35sqcm",
    "scalene",
    "scalene",
    "scalene",
    "scalene",
    "area",
    "altitude",
    "3",
  ]);

  const turn = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const ans = [
    "equilateral",
    "isosceles",
    "35sqcm",
    "obtuse",
    "acute",
    "isosceles",
    "right",
    "perimeter",
    "hypotenuse",
    "5",
  ];

  let score = 0;

  const handleChange = (e) => {
    let x = arr;
    x[turn[e.target.id]] = e.target.value;
    setArr((arr) => [...x]);
  };

  const handleSubmit = (e) => {
    let result = 0;
    let x = document.querySelectorAll(".questions");
    for (let i = 0; i < 10; i++) {
      if (arr[i] === ans[i]) {
        x[i].classList.add("correct");
        result += 1;
      } else {
        x[i].classList.add("incorrect");
      }
    }
    score = result;
    setText(`Your score is ${score} out of 10`);
  };

  return (
    <div className="quiz">
      <Link to="/" className="quiz_back">
        <i className="fas fa-chevron-left"></i>Go back
      </Link>
      <div className="quiz_container">
        <h1 className="title">Let's see how much do know about triangles ?</h1>

        <div className="questions_container">
          {questions.map((question) => {
            return (
              <div key={question.id} className="questions">
                <label>{question.question}</label>
                <select
                  id={question.id}
                  value={arr[turn[question.id]]}
                  onChange={handleChange}
                >
                  <option value={question.options[0]}>
                    {question.options[0]}
                  </option>
                  <option value={question.options[1]}>
                    {question.options[1]}
                  </option>
                  <option value={question.options[2]}>
                    {question.options[2]}
                  </option>
                  <option value={question.options[3]}>
                    {question.options[3]}
                  </option>
                </select>
              </div>
            );
          })}
        </div>
        <button className="quiz_button" onClick={handleSubmit}>
          Submit
        </button>
        <p className="result">{text}</p>
      </div>
    </div>
  );
};

export default Quiz;
