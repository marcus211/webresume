import React from 'react';
import BlockRectangle from "../components/blockA";

class SectionIntroduction extends React.Component {
  render() {
    return (
      <div className="section_white">
        <div className="container">
          <div>自我介紹</div>
          <div className="row">
            <div className="col-sm-4">
              <BlockRectangle />
            </div>
            <div className="col-sm-8">
              <BlockRectangle />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionIntroduction
