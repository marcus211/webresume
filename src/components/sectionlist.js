import React from 'react';
import BlockRectangle from "./blockA";

class SectionList extends React.Component {
  render() {
    return (
      <div className="section_gray">
        <div className="container">
          <div>工作經歷</div>
          <div className="row">
            <div className="col-sm-4">
              <BlockRectangle />
            </div>
            <div className="col-sm-4">
              <BlockRectangle />
            </div>
            <div className="col-sm-4">
              <BlockRectangle />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionList
