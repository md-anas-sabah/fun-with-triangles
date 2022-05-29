import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Angles = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState(
    "Enter the inputs to check if it forms a triangle or not"
  );

  const handleClick = () => {
    if (a === "" || b === "" || c === "") {
      setResult("Please, Enter all the fields");
    } else if (Number(a) <= 0 || Number(b) <= 0 || Number(c) <= 0) {
      setResult("Enter valid values");
    } else if (
      Number(a) + Number(b) + Number(c) < 180 ||
      Number(a) + Number(b) + Number(c) > 180
    ) {
      setResult("Sorry these angles cannot form a triangle");
    } else if (Number(a) + Number(b) + Number(c) === 180) {
      setResult(
        "Yes, this set of angles can form a triangle. Any set of three angles that add upto 180 degrees can form a triangle except for zeros"
      );
    }
  };

  return (
    <div className="app">
      <div className="container">
        <Link to="/" className="back">
          <i className="fas fa-chevron-left"></i>Go back
        </Link>
        <h1 className="title">What angles (in degrees) form a triangle?</h1>
        <div className="input_container">
          <input
            type="number"
            className="inputs"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
          <input
            type="number"
            className="inputs"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
          <input
            type="number"
            className="inputs"
            value={c}
            onChange={(e) => setC(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Check</button>
        <p className="result">"{result}"</p>
      </div>
    </div>
  );
};

export default Angles;
