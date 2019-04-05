import React from 'react';
import BlockSquare from "./blockB";

class SectionMainWork extends React.Component {
  render() {
    return (
      <div className="section_white">
        <div className="chapterName">主要工作</div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <BlockSquare />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionMainWork
