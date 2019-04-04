import React from 'react';
import BlockSquare from "./blockB";

class SectionMainWork extends React.Component {
  render() {
    return (
      <div className="section_white">
        <div className="container">
          <div>主要工作</div>
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
