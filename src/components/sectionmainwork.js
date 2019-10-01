import React from "react";
import { FaHtml5, FaServer, FaTools  } from "react-icons/fa";
import WorkBox from './WorkBox/WorkBox'

class SectionMainWork extends React.Component {
  render() {
    const inputWork = [
      {icon: <FaHtml5/>, text: 'Front-end Development', value: 73, content: 'HTML5, CSS3/SCSS, Javascript, React JS/React Native, Bootstrap, D3, JSON/AJAX' },
      {icon: <FaServer/>, text: 'Back-end Development', value: 60, content: 'Firebase & Python (learning...)' },
      {icon: <FaTools/>, text: 'Development Tools/Other', value: 83, content: 'vscode, npm/yarn, git/github, PhotoCap 6.0, QGIS, pixlr editor (online free), PTGui' },
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
