import { useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";

const Area = () => {
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [side1, setSide1] = useState(0);
  const [side2, setSide2] = useState(0);
  const [side3, setSide3] = useState(0);
  const [result, setResult] = useState(
    "Enter the inputs to find the area of triangle"
  );
  const [result2, setResult2] = useState(
    "Enter the inputs to find the area of triangle"
  );

  const handleClick = () => {
    if (base <= 0 || height <= 0) {
      setResult("Please provide valid inputs");
    } else {
      setResult(
        `Resultant Area is: ${
          (1 / 2) * Number(base) * Number(height)
        } sq. units`
      );
    }
  };

  const handleClick2 = () => {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      setResult2("Please provide valid inputs");
    } else if (
      Number(side1) + Number(side2) <= Number(side3) ||
      Number(side3) + Number(side2) <= Number(side1) ||
      Number(side1) + Number(side3) <= Number(side2)
    ) {
      setResult2("Impossible Triangle");
    } else {
      let s = (Number(side1) + Number(side2) + Number(side3)) / 2;

      setResult2(
        `Resultant Area is: ${Math.sqrt(
          s * (s - side1) * (s - side2) * (s - side3)
        ).toFixed(2)}`
      );
    }
  };

  return (
    <div className="app">
      <div className="container">
        <Link to="/" className="back">
          <i className="fas fa-chevron-left"></i>Go back
        </Link>
        <h1 className="title">Area of Triangle</h1>
        <p className="text">Area = 1/2 * base * height</p>
        <div className="area_container">
          <div className="input_container">
            <span>height: </span>
            <input
              type="number"
              className="inputs"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <span>base: </span>
            <input
              type="number"
              className="inputs"
              value={base}
              onChange={(e) => setBase(e.target.value)}
            />
          </div>
          <button onClick={handleClick}>calculate</button>
          <p className="result">"{result}"</p>
        </div>
        <span className="divider">or</span>
        <div className="area_container2">
          <p className="text">Area = √[s(s-a)(s-b)(s-c)]</p>
          <div className="input_container2">
            <label>
              Side1:{" "}
              <input
                type="number"
                value={side1}
                onChange={(e) => setSide1(e.target.value)}
              />
            </label>
            <label>
              Side2:{" "}
              <input
                type="number"
                value={side2}
                onChange={(e) => setSide2(e.target.value)}
              />
            </label>
            <label>
              Side3:{" "}
              <input
                type="number"
                value={side3}
                onChange={(e) => setSide3(e.target.value)}
              />
            </label>
          </div>
          <button onClick={handleClick2}>calculate</button>
          <p className="result">"{result2}"</p>
        </div>
      </div>
    </div>
  );
};

export default Area;
