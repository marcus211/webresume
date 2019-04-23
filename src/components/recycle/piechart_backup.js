import React from "react";
import ReactD3 from "react-d3-components";

let PieChart = ReactD3.PieChart;

let data ={
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
};

let sort = null;
React.render (
    <PieChart
      data={data}
      sort={sort}
      width={600}
      height={400}
      margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
    />,
    document.getElementById('piechart')
);