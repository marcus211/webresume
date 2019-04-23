import React, { Component } from 'react';
import * as d3 from "d3";
import Arc from "../PieChart/Arc";

//https://dzone.com/articles/how-to-make-a-piechart-using-react-and-d3
class Piechart extends Component {
    constructor(props) {
        super(props);
        this.pie = d3.pie().value((d) => d.number);
        this.colors = d3.scaleOrdinal(d3.schemeCategory10);
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
            <svg height={300} width={300}>
                <g transform={translate}>
                    {pie.map((d, i) => this.arcGenerator(d, i))}
                </g>
            </svg>

        )
    }
}
 
export default Piechart;