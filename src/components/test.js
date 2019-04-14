import React from 'react';
import * as d3 from "d3";

function BarGroup(props) {
  let barPadding = 2
  let barColor = 'rgb(192, 192, 192, 0.5)'
  let barBaseColor = 'rgb(192, 192, 192,0.5)'
  let widthScale = d => d*3

  let width = widthScale(props.d.value)
  let barwidth = 300

  let yMid = props.barHeight * 0.6
  
  return <g className="bar-group">
    <text className="name-label" x="-100" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
    <text className="value-label" x={width} y={yMid} lignmentBaseline="middle" >{props.d.value}</text>    
      <rect
      width={barwidth}
      height={props.barHeight - barPadding}
      fill={barBaseColor}
      />
      <rect
      width={width}
      height={props.barHeight - barPadding}
      fill={barColor}
      />
  </g>
}

class BarChart extends React.Component {
  state = {
    data: [
      { name: 'HTML5', value: 60 },
      { name: 'CSS', value: 60 },
      { name: 'Javascript', value: 50 },
      { name: 'jquery', value: 50 },
      { name: 'Python', value: 40 },
      { name: 'Firebase', value: 40 },
      { name: 'ReactJS', value: 30 },
      { name: 'QGIS', value: 85 }
    ]
  }

  render() {
    let barHeight = 30
    let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}><BarGroup d={d} barHeight={barHeight} /> </g>)                         
    
    return <svg width="800" height="400" >
      <g className="container">
        <text className="title" x="0" y="40">SKILLS TABLE</text>
        <g className="chart" transform="translate(100,60)">
          {barGroups}
        </g>
      </g>
    </svg>
  }
}

export default BarChart
