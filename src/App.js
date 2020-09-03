<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
=======
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
>>>>>>> master

import Homepage from './pages/homepage/homepage.component';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
