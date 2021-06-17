import React, { useState } from "react";
import InputField from "./InputComponents/InputField";
import { Button } from "@material-ui/core";
import Postdata, { Getdata } from "../../Firebase/cognigitiveapi";

const Cognitive = () => {
  const initialValues = {
    mood1: "",
    mood2: "",
    mood3: "",
    mood4: "",
    mood5: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };

  const handleSubmit = (e) => {
    // let category=['section1','section2'];
    // let sentences=[values.mood1,values.mood2,values.mood3,values.mood4,values.mood5]
    // let valu=[80,20,10]
    // let date=new Date();
    //  Postdata('lucky',category,'positive',valu,date.toISOString(),sentences);
    Getdata("lucky");
    e.preventDefault();

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
