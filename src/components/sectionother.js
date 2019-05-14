import React from 'react';
import BlockRectangle from '../components/blockA'

class SectionOther extends React.Component {
  render() {
    return (
      <div id="other" className="section_gray">
        <div className="chapterName">作品集</div>
        <div className="container text-center">
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

export default SectionOther
