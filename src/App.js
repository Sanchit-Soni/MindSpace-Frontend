import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NewNav from "./components/NewNav";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Analysis from "./components/Analysis";
import Facesnap from "./components/screens/Facesnap";
import Writeyourmood from "./components/screens/Writeyourmood";
import Cognitive from "./components/screens/Cognitive";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
function App() {
  const Routing = () => {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Profile" exact component={Profile} />
        <Route path="/Analysis" exact component={Analysis} />
        <Route path="/Writeyourmood" exact component={Writeyourmood} />
        <Route path="/CognitiveCorrections" exact component={Cognitive} />
        <Route path="/Facesnap" exact component={Facesnap} />
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

          {/* <Footer /> */}
        </div>
      )}
    </div>
  );
}

export default App;
