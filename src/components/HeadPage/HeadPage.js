import React from 'react';
import { FaDiceD20, FaGithub, FaLine, FaPhoneSquare } from 'react-icons/fa';
import { IoIosPaper, IoIosMail } from "react-icons/io";
import { IconContext } from "react-icons";
// import logo from './logo.svg';
import './HeadPage.css';

class HeadPage extends React.Component {
  render() {
    const pageicon = {
      size: '2.5em',
      className: 'iconset'
    }
    return (
      <div id="HomePage" className="section_headpage background_setup bg-img-01">
        {/* <img src={logo} className="spinLogo " alt="logo" /> */}
        <FaDiceD20 className="spinLogo " alt="logo" />
        <div className='textHead'>
          Never give up on your dream!!
        </div>
        <div>
          <IconContext.Provider value={pageicon}>
            <a href={`https://www.cakeresume.com/chun-hsiang-huang`} target={`_blank`}>
              <IoIosPaper />
            </a>
            <a href={`https://github.com/marcus211`} target={`_blank`}>
              <FaGithub />
            </a>
            <a href={`mailto:saiboy211@gmail.com`} target={`_blank`}>
              <IoIosMail />
            </a>
            <a href={`https://line.me/ti/p/S4THzc7ns4`} target={`_blank`}>
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
