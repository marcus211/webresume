import React from 'react';
import PieChart from "../components/PieChart/PieChart";

class SectionList extends React.Component {
  render() {
    return (
      <div id="worklist" className="section_gray  background_setup bg-img-02">
        <div className="chapterName">工作經歷</div>
        <div className="container  text-center">
          <div className="row">
            <div className="col-sm-4">
              <div style={{border:`none`, width:'100%', maxHeight:'100%', backgroundColor:`none`}} className="fade">
                <PieChart/>
              </div>
            </div>
            <div className="col-sm-8">
              <ul class="timeline">
                <div>career 03(2016 - present)</div>
                <li>
                  <ol>
                    <li>xxx</li>
                    <li>xxx</li>
                    <li>xxx</li>
                  </ol>
                </li>
                <div>career 02(2014 - 2016)</div>
                <li>
                  <ol>
                    <li>xxx</li>
                    <li>xxx</li>
                    <li>xxx</li>
                  </ol>
                </li>
                <div>career 01(2013 - 2014)</div>
                <li>
                  <ol>
                    <li>xxx</li>
                    <li>xxx</li>
                    <li>xxx</li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionList
