import React from 'react';
import * as d3 from "d3";
import Arc from "../PieChart/Arc";
 
const Piechart = ({x, y, innerRadius, outerRadius, data}) => {
    let pie = d3.pie()
                .value((d) => d.value)(data),
        translate = `translate(${x}, ${y})`,
        colors = d3.scaleOrdinal(["#66c2a5","#fc8d62","#8da0cb",
        "#e78ac3","#a6d854","#ffd92f","#a6d854","#ffd92f"]);
    return (
        <g transform={translate}>
            {pie.map((d, i) => (
                <Arc key={`arc-${i}`}
                     data={d}
                     innerRadius={innerRadius}
                     outerRadius={outerRadius}
                     color={colors(i)} 
            />))}
        </g>
    );
};
 
export default Piechart;