import React from 'react';
import BlockRectangle from "./blockA";

class SectionList extends React.Component {
  render() {
    return (
      <div id="worklist" className="section_gray">
        <div className="chapterName">工作經歷</div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <BlockRectangle />
            </div>
            <div className="col-sm-6">
              <BlockRectangle />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionList
