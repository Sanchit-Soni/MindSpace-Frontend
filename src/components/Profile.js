import React from "react";
import { useStateValue } from "../StateProvider";

import { Row, Col, Container } from "react-bootstrap";

const Profile = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="container">
      <h1>Profile</h1>
      <div className="row-div">
        <center>
          <img className="user-image" src={user.photoURL} />
        </center>
        <div className="form-div">
          <center>
            <h1> {user.displayName}</h1>
            <h1> {user.email}</h1>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Profile;
