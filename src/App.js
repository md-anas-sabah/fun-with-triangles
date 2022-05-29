import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Angles from "./components/Angles";

import "./App.css";
import Hypotenuse from "./components/Hypotenuse";
import Area from "./components/Area";
import Quiz from "./components/Quiz";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/angles" component={Angles} />
        <Route path="/area" component={Area} />
        <Route path="/hypotenuse" component={Hypotenuse} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </Router>
  );
}

export default App;
