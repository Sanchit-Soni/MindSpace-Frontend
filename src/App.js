import React, { useState, useEffect } from "react";
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
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import firebase from "firebase/app";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
function App() {
  const [isAuth, setIsAuth] = useState();
  const auth = firebase.auth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, [isAuth, auth]);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // store the user on local storage
      localStorage.setItem("user", true);
    } else {
      // removes the user from local storage on logOut
      localStorage.removeItem("user");
    }
  });

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

  // const {user} = useContext()
  return (
    <div className="App">
      {!user ? (
        // <Login />
        <>
          <Route path="/signUp" component={SignUpPage} />
          <Route path="/signIn" component={SignInPage} />
        </>
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
