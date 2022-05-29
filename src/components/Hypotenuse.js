import { useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";

const Hypotenuse = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const [result, setResult] = useState(
    "Enter the inputs to calculate hypotenuse"
  );

  const handleClick = () => {
    if (a <= 0 || b <= 0) {
      setResult("Please provide valid inputs");
    } else {
      const res = Math.sqrt(Number(a) * Number(a) + Number(b) * Number(b));
      const hyp = res.toPrecision(4);
      setResult(`Hypotenuse is: ${hyp}`);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <Link to="/" className="back">
          <i className="fas fa-chevron-left"></i>Go back
        </Link>
        <h1 className="title">Let's calculate hypotenuse</h1>
        <p className="text">
          In geometry, a hypotenuse is the longest side of a right-angled
          triangle, the side opposite the right angle.
          <span className="subtext">
            (Hypotenuse)<sup>2</sup> = (Side One)<sup>2</sup> + (Side Two)
            <sup>2</sup>
          </span>
        </p>
        <div className="hypotenuse_container">
          <div className="input_container">
            <span>Side 1: </span>
            <input
              type="number"
              className="inputs"
              value={a}
              onChange={(e) => setA(e.target.value)}
            />
            <span>Side 2: </span>
            <input
              type="number"
              className="inputs"
              value={b}
              onChange={(e) => setB(e.target.value)}
            />
          </div>

          <button onClick={handleClick}>calculate</button>
          <p className="result">"{result}"</p>
        </div>
      </div>
    </div>
  );
};

export default Hypotenuse;
