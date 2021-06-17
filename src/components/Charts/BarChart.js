import React from "react";
import { Bar } from "react-chartjs-2";
const BarChart = ({ sentiments, values }) => {
  console.log(values);
  return (
    <div>
      <Bar
        data={{
          labels: ["Neutral", "Happy", "Sad", "Angry", "TBD", "TBD"],
          datasets: [
            {
              label: "Mood",
              // data: [0.5, 0.3, 0.13, 0.94, 0.5, 0.6],
              data: [values[0], 10, 123, 32],

              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
