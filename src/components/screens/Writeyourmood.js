import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import "../home.css";

const Writeyourmood = () => {
  const [text, setText] = useState("");
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <div className="container">
      <center>
        <h1>Write Your Mood</h1>
        <h3>Pen down your soul and calm down your mind.</h3>
        <h2>
          <Moment format="DD MMMM YYYY" withTitle>
            {date}
          </Moment>
        </h2>
      </center>
      <form>
        <center>
          <div class="form-group">
            <textarea
              placeholder="Write Your mood here"
              onChange={handleChange}
              className="text-box"
              id="exampleFormControlTextarea1"
              rows="15"
              cols="13"
            ></textarea>
          </div>
          <button onClick={handleSubmit} className="form-btn">
            Submit
          </button>
        </center>
      </form>
    </div>
  );
};

export default Writeyourmood;
