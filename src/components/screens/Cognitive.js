import React, { useState, useEffect } from "react";
import InputField from "./InputComponents/InputField";
import { Button } from "@material-ui/core";
import Postdata, { GetCognidata } from "../../Firebase/cognigitiveapi";

const Cognitive = () => {
  const initialValues = {
    mood1: "",
    mood2: "",
    mood3: "",
    mood4: "",
    mood5: "",
  };

  const [values, setValues] = useState(initialValues);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    if (localStorage.getItem("user-details") !== null) {
      let values = localStorage.getItem("user-details");
      let newVal = JSON.parse(values);
      setProfile(newVal.user);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let sentence = ["hello", "hi", "Bye", "new", "sad"];
    let date = new Date();
    let category = ["section1", "section2", "section3"];
    let sentiment = "positive";
    let values = [60, 30, 10];
    Postdata(
      `${profile.uid}`,
      category,
      sentiment,
      values,
      date.toISOString(),
      sentence
    );

    console.log(values);
  };
  const handleReset = (e) => {
    e.preventDefault();
    const initialValues = {
      mood1: "",
      mood2: "",
      mood3: "",
      mood4: "",
      mood5: "",
    };
    setValues(initialValues);
  };

  return (
    <div className="container back-img">
      <h1>Cognitive Corrections</h1>
      <center>
        <div>
          <img
            className="cog-image"
            alt=" "
            src="https://image.freepik.com/free-vector/employee-working-office-interior-workplace-thinking-about-success_1150-37491.jpg"
          />
        </div>
      </center>
      {/* <InputField /> */}
      <form>
        <div className="input-bars">
          <input
            className="ip-bar"
            placeholder="Enter Your Thought"
            value={values.mood1}
            onChange={handleInputChange}
            name="mood1"
            label="Mood1"
          />
          <input
            className="ip-bar"
            placeholder="Enter Your Thought"
            value={values.mood2}
            onChange={handleInputChange}
            name="mood2"
            label="Mood2"
          />
          <input
            placeholder="Enter Your Thought"
            className="ip-bar"
            value={values.mood3}
            onChange={handleInputChange}
            name="mood3"
            label="Mood3"
          />
          <input
            placeholder="Enter Your Thought"
            className="ip-bar"
            value={values.mood4}
            onChange={handleInputChange}
            name="mood4"
            label="Mood4"
          />
          <input
            placeholder="Enter Your Thought"
            className="ip-bar"
            value={values.mood5}
            onChange={handleInputChange}
            name="mood5"
            label="Mood5"
          />
        </div>
        <br></br>
        <center>
          <Button
            className="cogni-btn"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit{" "}
          </Button>
        </center>
        {/* <button onCLick={handleReset} type="reset">
          Reset{" "}
        </button> */}
      </form>
    </div>
  );
};

export default Cognitive;
