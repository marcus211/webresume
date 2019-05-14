import React from "react";
import BlockRectangle from '../components/blockA'
import BarChart from "../components/BarChart/BarChart";

class SectionMainWork extends React.Component {
  render() {
    return (
      <div id="mainwork" className="section_white">
        <div className="chapterName">個人專長</div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <BlockRectangle />
            </div>
            <div className="col-sm-6">
              <div style={{border:`none`, width:'100%', height:'100%', backgroundColor:`none`}}>
                <BarChart/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionMainWork
