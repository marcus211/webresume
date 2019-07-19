import React, { Component } from 'react';
import HeadPage from './components/HeadPage/HeadPage'
import Navbar from "./components/NavBar/navbar";
import SectionIntroduction from "./components/sectionIntroduction";
import SectionList from "./components/sectionlist";
import SectionMainWork from "./components/sectionmainwork";
import SectionOther from "./components/sectionother";
import SectionFooter from "./components/sectionfooter";
import ScrollTop from "./components/ScrollTop/scrolltop";
import './App.css';

class AppActive extends Component {
  render() {
    return (
      <div>
        <header>
          <ScrollTop />
          <Navbar />
          <HeadPage />
        </header>
        <body>
          <SectionIntroduction />
          <SectionList />
          <SectionMainWork />
          <SectionOther />
        </body>
        <footer>
          <div className="footersetup">
            <SectionFooter />
          </div>
        </footer>
      </div>
    );
  }
}

export default AppActive;
