import React, { PureComponent } from 'react'
import * as d3 from 'd3'

//https://wizardace.com/d3-piechart/
class PieChart extends PureComponent {

  componentDidMount() {
    this.drawPieChart();
  }
  
  drawPieChart(){
    /* data setup */
    const data = [
      { label: 'career 01', value: 1 },
      { label: 'career 02', value: 1 },
      { label: 'career 03', value: 3 },
    ]
    /* const setup */
    const piew = 300;
    const pieh = 300;
    const pieradius = Math.min(piew, pieh)/2;

    /* select div to build svg */
    const svg = d3.select("#targetPieChart")
                  .append('svg')
                  .attr("viewBox", `0 0 ${piew} ${pieh}`);

    /* build chart */                  
    const piechart = svg.append('g')
                        .attr('transform', `translate(${pieradius},${pieradius})`);

    /* build arc */ 
    const arc = d3.arc()
                  .innerRadius(0)
                  .outerRadius(pieradius*0.65);

    /* build color*/
    const color = d3.scaleOrdinal()
                    /*.range(["#DC3912", "#3366CC", "#109618", "#FF9900", "#990099"]);*/
                    .domain(data)
                    .range(d3.schemeSet3);

    /* set pie value*/
    const pie = d3.pie(data)
                  .sort(null)            
                  .value((d)=>{return d.value});

    /* piechart setup*/
    const pieGroup = piechart.selectAll(".pie")
                      .data(pie(data))
                      .enter()
                      .append("g")
                      .attr("class", "pie");
          pieGroup.append("path")
                  .attr("d", arc)
                  .attr("fill", (d)=> { return color(d.index) })
                  .attr("opacity", 0.7)
                  .attr("stroke", "black");
    
    /* textValue setup */
    const textValue = d3.arc()
                   .outerRadius(pieradius/2)
                   .innerRadius(pieradius/4);

          pieGroup.append("text")
                  .attr("fill", "black")
                  .attr("transform", (d)=> { return "translate(" + textValue.centroid(d) + ")"; })
                  .attr("font", "1em")
                  .attr("text-anchor", "middle")
                  .text((d)=> { return d.data.value+'年'; });

    /* text setup */
    const text = d3.arc()
                   .outerRadius(pieradius)
                   .innerRadius(pieradius/2);

          pieGroup.append("text")
                  .attr("fill", "black")
                  .attr("transform", (d)=> { return "translate(" + text.centroid(d) + ")"; })
                  .attr("font", "1em")
                  .attr("text-anchor", "middle")
                  .text((d)=> { return d.data.label; });
  }
  render() {
      return <div id="targetPieChart"></div>
  }
}
export default PieChart;