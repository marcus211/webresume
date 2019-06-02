import React from 'react';
import headimage from '../img/headphoto.jpg';
import { IoMdPerson, IoMdMail, IoIosPhonePortrait, IoIosFlag } from "react-icons/io";
/*https://react-icons.netlify.com/*/

class BlockHeadPhoto extends React.Component {
  render() {
    return (
      <div>      
        <div className="headphoto">
          <img src={headimage} className="roundedimage" alt="headphoto"></img>
        </div>
        <div className="headphotomessage">
          <i><IoMdPerson /> marcus huang<br/></i>
          <i><IoMdMail /> saiboy211@gmail.com<br/></i>
          <i><IoIosPhonePortrait /> 0919-243188<br/></i>
          <i><IoIosFlag /> taipei, taiwan</i>
        </div>
        <br/>
      </div>
    )
  }
}

export default BlockHeadPhoto
