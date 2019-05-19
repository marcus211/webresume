import React, { Component } from 'react';
import { FaFacebook, FaGithub, FaLine, FaLinkedinIn, FaPhoneSquare} from 'react-icons/fa';
import { IoIosMail} from "react-icons/io";
import { IconContext } from "react-icons";
import BlockNavbar from "./components/navbar";
import SectionIntroduction from "./components/sectionIntroduction";
import SectionList from "./components/sectionlist";
import SectionMainWork from "./components/sectionmainwork";
import SectionOther from "./components/sectionother";
import SectionFooter from "./components/sectionfooter";
import logo from './logo.svg';
import './App.css';

class AppActive extends Component {
  render() {
    const pageicon = {
      size: '3em',
      className: 'iconset'
    }
    return (
      <div className="main">
        <header>
          <BlockNavbar />
          <div id="HomePage"className="div_gray_black  background_setup bg-img-01">
            <img src={logo} className="App-logo" alt="logo" />
            <div className='chapterPage'>
            Never give up on your dream!!
            </div>            
            <div>
              <IconContext.Provider value={pageicon}>
                <a href={`https://www.facebook.com/`} target={`_blank`}>
                  <FaFacebook />
                </a>
                <a href={`https://github.com/`} target={`_blank`}>
                  <FaGithub />
                </a>
                <a href={`https://tw.linkedin.com/`} target={`_blank`}>
                  <FaLinkedinIn />
                </a>
                <a href={`mailto:saiboy211@gmail.com`} target={`_blank`}>
                  <IoIosMail />
                </a>
                <a href={`https://line.me/`} target={`_blank`}>
                  <FaLine />
                </a>
                <a href={`tel:0919243188`} target={`_blank`}>
                  <FaPhoneSquare />
                </a>
              </IconContext.Provider>
            </div>

          </div>
        </header>
        <body>
          <SectionIntroduction />
          <SectionList />
          <SectionMainWork />
          <SectionOther />
        </body>
        <footer>
          <div className="footersetup">
          <SectionFooter/>
          </div>
        </footer>
      </div>
    );
  }
}

export default AppActive;
