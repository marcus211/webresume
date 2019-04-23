import React, { Component } from 'react';
import * as d3 from "d3";
import Arc from "../PieChart/Arc";
 
class Piechart extends Component {
    constructor(props) {
        super(props);
 
        this.pie = d3.pie().value((d) => d.value);
        this.colors = d3.scaleOrdinal(["#66c2a5","#fc8d62","#8da0cb",
        "#e78ac3","#a6d854","#ffd92f","#a6d854","#ffd92f"]);
    }
    arcGenerator(d, i) {
        return (
            <Arc key={`arc-${i}`}
                        data={d}
                        innerRadius={this.props.innerRadius}
                        outerRadius={this.props.outerRadius}
                        color={this.colors(i)} />
        );
    }
 
    render() {
        let pie = this.pie(this.props.data),
            translate = `translate(${this.props.x}, ${this.props.y})`;
 
        return (
            <g transform={translate}>
                {pie.map((d, i) => this.arcGenerator(d, i))}
            </g>
        )
    }
}
 
export default Piechart;