import React from "react";
import BarChart from "./Charts/BarChart";
import Circular from "./Charts/Circular";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
const Analysis = () => {
  return (
    <div className="container">
      <h1>Analytics</h1>
      <div className="charts">
        <div className="chart-1">
          <BarChart />
        </div>
        <br></br>
        <div className="chart-2">
          <LineChart />
        </div>
        <br></br>
        <div className="chart-3">
          <PieChart />
        </div>
        <div className="chart-3">
          <Circular />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
