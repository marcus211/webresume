import React from 'react';
import HeadPhoto from "../components/HeadPhoto/HeadPhoto";
import IntroductionBox from "../components/IntroductionBox/IntroductionBox";

class SectionIntroduction extends React.Component {
  render() {
    return (
      <div id="Introduction" className="sectionBase">
        <div className="chapterName">
          Introduction
        </div>
        <div className="container">
          <div className="row section_padding">
            <div className="col-sm-4">
              <HeadPhoto />
            </div>
            <div className="col-sm-8">
              <IntroductionBox />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionIntroduction
