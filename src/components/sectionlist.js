import React from 'react';


class SectionList extends React.Component {
  render() {
    return (
      <div id="worklist" className="background_setup bg-img-02">
        <div className="chapterName">Experiences</div>
        <div className="container  text-center">
          <div className="row">
            <div className="col-sm-12">
              <ul className="timeline">
                <div>career 03(2016 - present)</div>
                <li>
                  <ol>
                    <li>xxx</li>
                    <li>xxx</li>
                    <li>xxx</li>
                  </ol>
                </li>
                <div>career 02(2014 - 2016)</div>
                <li>
                  <ol>
                    <li>xxx</li>
                    <li>xxx</li>
                    <li>xxx</li>
                  </ol>
                </li>
                <div>career 01(2013 - 2014)</div>
                <li>
                  <ol>
                    <li>xxx</li>
                    <li>xxx</li>
                    <li>xxx</li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionList
