import React from "react";
import WorkBox from './WorkBox/WorkBox'

class SectionMainWork extends React.Component {
  render() {
    const inputWork = [
      { text: 'Front-end Development', value: 73, content: 'HTML5, CSS3/SCSS, Javascript, React JS/React Native, Bootstrap, D3, JSON/AJAX' },
      { text: 'Back-end Development', value: 65, content: 'Firebase, Python' },
      { text: 'Development Tools/Other', value: 83, content: 'vscode, npm/yarn, git/github, PhotoCap 6.0, QGIS, pixlr editor (online free), PTGui' },
    ];
    return (
      <div id="mainwork" className="sectionBase">
        <div className="chapterName">Skills</div>
        <div className="container">
          <WorkBox data={inputWork} />
        </div>
        <br />
        <br />
      </div>
    )
  }
}

export default SectionMainWork
