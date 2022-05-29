import React from "react";

import { useHistory } from "react-router-dom";

import "../App.css";

const Home = () => {
  const history = useHistory();
  return (
    <div className="app">
      <header className="header">
        <h1>Fun with Triangles</h1>
      </header>
      <div className="grids">
        <div className="col">
          <div className="cell" onClick={() => history.push("/angles")}>
            Angles of Triangle
          </div>
          <div className="cell" onClick={() => history.push("/area")}>
            Area of Triangle
          </div>
        </div>
        <div className="col">
          <div className="cell" onClick={() => history.push("/hypotenuse")}>
            Hypotenuse
          </div>
          <div className="cell" onClick={() => history.push("/quiz")}>
            Quiz
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
