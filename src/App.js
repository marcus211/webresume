import React, { Component } from 'react';
import SectionIntroduction from "./components/sectionIntroduction";
import SectionList from "./components/sectionlist";
import SectionMainWork from "./components/sectionmainwork";
import SectionOther from "./components/sectionother";
import logo from './logo.svg';
import './App.css';

class AppActive extends Component {
  render() {
    return (
      <div className="main">
        <header>
          <div className="div_gray_black">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Edit <code>src/App.js</code> and save to reload.</p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React  </a>
          </div>
        </header>
        <body>
          <SectionIntroduction />
          <SectionList />
          <SectionMainWork />
          <SectionOther />
        </body>
        <footer>
          <div className="div_darkblue"></div>
        </footer>
      </div>
    );
  }
}

export default AppActive;
