import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout/:someRandomId/page">
            <h1>checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Log in</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
