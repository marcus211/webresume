import React from 'react';
import BlockHeadPhoto from "../components/blockheadphoto";
import BlockRectangle from "../components/blockA";

class SectionIntroduction extends React.Component {
  render() {
    return (
      <div className="section_white">
        <div className="chapterName">自我介紹</div>
        <div className="container">
          <div className="row">
            <div class="col-sm-4 test01">
              <BlockHeadPhoto />
            </div>
            <div class="col-sm-8 test02">
              <BlockRectangle />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionIntroduction
