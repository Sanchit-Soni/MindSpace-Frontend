import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NewNav from "./components/NewNav";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  const Routing = () => {
    return (
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/Home" exact component={Home} />
        <Route path="/Profile" exact component={Profile} />
      </Switch>
    );
  };
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="main">
          <Router>
            <NewNav />

            <Routing />
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
