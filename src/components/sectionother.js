import React from 'react';
import BlockSquare from "./blockB";
import BarChartContainer from "./barchart";

class SectionOther extends React.Component {
  render() {
    return (
      <div id="other" className="section_gray">
        <div className="chapterName">其他</div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <BlockSquare />
            </div>
            <div className="col-sm-6">
              <BarChartContainer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionOther
