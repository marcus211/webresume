import React from 'react';
import { FaLine, FaGithub, FaPhoneSquare } from 'react-icons/fa';
import { IoIosPaper, IoIosMail } from "react-icons/io";
import { IconContext } from "react-icons";
import MessageBoard from './Message/Message'
// import MapBox from './MapBox/MapBox'

class SectionFooter extends React.Component {

  render() {
    const footericon = {
      size: '3.5em',
      className: 'iconset'
    };
    return (
      <div>
        <div id="footer" className="chapterFooter">CONTACT</div>
        {/* <MapBox /> */}
        <MessageBoard />
        <IconContext.Provider value={footericon}>
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
        <div className='footercontent'>
          &copy; Copyright 2019 by marcus huang. All rights reserved.
        </div>
      </div>
    )
  }
};

export default SectionFooter;