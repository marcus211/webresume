import React from "react";
import PieChart from "../components/PieChart/Piechart";

class SectionMainWork extends React.Component {
  render() {
    return (
      <div id="mainwork" className="section_white">
        <div className="chapterName">主要工作</div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
test
            </div>
            <div className="col-sm-8">
              <PieChart 
                x={100}
                y={100}
                outerRadius={150}
                innerRadius={75} 
                data = {[
                  {value:1, label: 'HTML5', number: 60 },
                  {value:2,  label: 'CSS', number: 60 },
                  {value:3,  label: 'Javascript', number: 50 },
                  {value:4, label: 'jQuery', number: 50 },
                  {value:5,  label: 'Python', number: 40 },
                  {value:6,  label: 'Firebase', number: 40 },
                  {value:7,  label: 'ReactJS', number: 30 },
                  {value:8,  label: 'QGIS', number: 85 }
                ]}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionMainWork
