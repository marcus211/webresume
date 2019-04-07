import React from 'react';
import BlockHeadPhoto from "../components/blockheadphoto";
import BlockMessage from "../components/blockmessage";

class SectionIntroduction extends React.Component {
  render() {
    return (
      <div id="Introduction" className="section_white">
        <div className="chapterName">自我介紹</div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 test01">
              <BlockHeadPhoto />
            </div>
            <div className="col-sm-8 test02">
              <BlockMessage />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionIntroduction
