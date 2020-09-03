import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
