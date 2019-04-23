import React from "react";
import { BarChart } from "react-d3-components";

function BarChartContainer() {
  let data = [
    {
      values: [
        { x: 'HTML5', y: 60 },
        { x: 'CSS', y: 60 },
        { x: 'Javascript', y: 50 },
        { x: 'jquery', y: 50 },
        { x: 'Python', y: 40 },
        { x: 'Firebase', y: 40 },
        { x: 'ReactJS', y: 30 },
        { x: 'QGIS', y: 85 }
      ]
    }
  ];
  return (
    <BarChart
      data={data}
      width={300}
      height={400}
      margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
    />
  );
}
export default BarChartContainer;