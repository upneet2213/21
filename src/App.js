import React, { useState } from "react";
import "./App.css";
import { Home } from "./Pages/Home";
import { Error } from "./Pages/Error";
import { Navbar } from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Choice } from "./Choice";
import { SingleLaunch } from "./Pages/SingleLaunch";

function App() {
  const [choice, setChoice] = useState("");

  return (
    <div className="App">
      <Router>
        <Navbar setChoice={setChoice} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/launches/:choice" exact>
            <Choice choice={choice} />
          </Route>
          <Route path="/launch/:id" exact>
            <SingleLaunch />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
