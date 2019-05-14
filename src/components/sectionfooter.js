import React from 'react';
import { FaFacebook, FaGithub, FaLine, FaLinkedinIn, FaPhoneSquare} from 'react-icons/fa';
import { IoIosMail} from "react-icons/io";
import { IconContext } from "react-icons";

class SectionFooter extends React.Component {

  render() {
    const footericon = {
      size: '3.5em',
      className: 'iconset'
    };
    return (
      <div>
        <div className="chapterFooter">CONTACT</div>
        <IconContext.Provider value={footericon}>
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
        <div className='footercontent'>
          &copy; Copyright 2019 by marcus huang. All rights reserved.
        </div>
      </div> 
    )
  }
};

export default SectionFooter;