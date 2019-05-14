import React, { PureComponent } from 'react'
import * as d3 from 'd3'

//https://codepen.io/louisemoxy/pen/Bqgpvq
//https://blog.risingstack.com/d3-js-tutorial-bar-charts-with-javascript/
//https://blog.logrocket.com/data-visualization-in-react-using-react-d3-c35835af16d0
//https://learn.freecodecamp.org/data-visualization/data-visualization-with-d3
//https://medium.freecodecamp.org/how-to-create-your-first-bar-chart-with-d3-js-a0e8ea2df386
class BarChart extends PureComponent {

  componentDidMount() {
    this.drawBarChart();
  }
  
  drawBarChart(){
    /* data setup */
    const data = [
      { label: 'HTML5', value: 60 },
      { label: 'CSS', value: 50 },
      { label: 'Javascript', value: 50 },
      { label: 'jQuery', value: 40 },
      { label: 'Python', value: 20 },
      { label: 'Firebase', value: 30 },
      { label: 'ReactJS', value: 50},
      { label: 'QGIS', value: 80 }
    ]
    /* const setup */
    const margin = 30;
    const svgwidth = 400;
    const svgheight = 300;
    const w = svgwidth - 2 * margin;
    const h = svgheight - 2 * margin;
    const p = 0.4;

    /* select div to build svg */
    const svg = d3.select("#targetChart")
                  .append('svg')
                  .attr("viewBox", `0 0 ${svgwidth} ${svgheight}`);
                  
    /* build chart */
    const chart = svg.append('g')
                     .attr('transform', `translate(${margin},${margin})`);


    /* build x-axis and append into chart */             
    const xScale = d3.scaleBand()
                     .range([0,w])
                     .domain(data.map((d)=>d.label))
                     .padding(p)
          chart.append('g')
               .attr('transform', `translate(0, ${h})`)
               .call(d3.axisBottom(xScale));

    /* build y-axis and append into chart */    
    const yScale = d3.scaleLinear()
                     .range([h,0])
                     .domain([0,100]);
          chart.append('g')
               .attr("transform", `translate(0, 0)`)
               .call(d3.axisLeft(yScale));

    /* build bar and append into chart */
          chart.selectAll()
               .data(data)
               .enter()
               .append('rect')
               .attr('x', (d) => xScale(d.label))
               .attr('y', (d) => yScale(d.value))
               .attr('height', (d) => h - yScale(d.value))
               .attr('width', xScale.bandwidth())
               .attr("fill", d3.schemeSet3)

  }
  render() {
      return <div id="targetChart"></div>
  }
}
export default BarChart;