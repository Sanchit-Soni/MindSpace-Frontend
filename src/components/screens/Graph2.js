import React from "react";
import Circular from "../Charts/Circular";
import BarChart from "../Charts/BarChart";
import Button from "@material-ui/core/Button";
const Graph2 = ({ setSwitcher, values }) => {
  const handleChange = () => {
    setSwitcher("table");
  };

  return (
    <div>
      <center>
        <Button variant="contained" color="primary" onClick={handleChange}>
          Go Back
        </Button>
      </center>

      <br></br>
      <br></br>
      <Circular />
      {/* <Circular /> */}
      <br></br>
    </div>
  );
};

export default Graph2;
