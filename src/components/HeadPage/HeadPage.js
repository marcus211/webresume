import React from 'react';
import { FaFacebook, FaGithub, FaLine, FaLinkedinIn, FaPhoneSquare } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { IconContext } from "react-icons";
import logo from './logo.svg';
import './HeadPage.css';

class HeadPage extends React.Component {
  render() {
    const pageicon = {
      size: '2.5em',
      className: 'iconset'
    }
    return (
      <div id="HomePage" className="section_headpage head_background bg-img-01">
        <img src={logo} className="spinLogo " alt="logo" />
        <div className='textHead'>
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
    )
  }
}

export default HeadPage
