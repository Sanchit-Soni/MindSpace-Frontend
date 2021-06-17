import React from "react";
import Circular from "../Charts/Circular";
import BarChart from "../Charts/BarChart";
import Button from "@material-ui/core/Button";
const Graph2 = ({ setSwitcher, values }) => {
  const handleChange = () => {
    setSwitcher(false);
  };

  return (
    <div>
      <center>
        <Button variant="contained" color="primary" onClick={handleChange}>
          Go Back
        </Button>
      </center>

      <Circular />
      <br></br>
      <br></br>
      {/* <Circular /> */}
      <br></br>
    </div>
  );
};

export default Graph2;
