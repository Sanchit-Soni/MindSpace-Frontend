import React, { useState, useEffect } from "react";
import Table from "./Charts/Table";
import { Getdata } from "../Firebase/api";
import { Postdata, GetDataById } from "../Firebase/writemood";
// import {Getdata}  from "../../Firebase/cognigitiveapi";
import BarChart from "./Charts/BarChart";
import Circular from "./Charts/Circular";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
const Analysis = () => {
  const [wymData, setWymData] = useState();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    if (localStorage.getItem("user-details") !== null) {
      let values = localStorage.getItem("user-details");
      let newVal = JSON.parse(values);
      setProfile(newVal.user);
    }
    const uid = `${profile.uid}`;
    console.log(uid);
    let des = GetDataById(uid);
    console.log(des);
    setWymData(des);
    console.log(wymData);
    console.log(des);
  }, [wymData]);

  return (
    <div className="container">
      <h1>Analytics</h1>
      <div>
        <Table />
      </div>
      {/* <div className="charts">
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
      </div> */}
    </div>
  );
};

export default Analysis;
