import React from 'react';
import BoxFlex from '../components/LinkBox/LinkBox'

class SectionOther extends React.Component {
  render() {
    return (
      <div id="other" className="section_gray background_setup bg-img-03">
        <div className="chapterName">作品集</div>
        <div className="container text-center">
          <div className="row">
            <BoxFlex />
          </div>
        </div>
      </div>
    )
  }
}

export default SectionOther
