import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import posed from "react-pose";
import './HeadPhoto.css';
import imgHeadPhoto from './imgHeadPhoto.jpg';
import { IoMdPerson, IoMdMail, IoIosPhonePortrait, IoIosFlag } from "react-icons/io";
/*https://react-icons.netlify.com/*/

/*react-pose component*/
/*start*/
const OperateDiv = posed.div({
  init: {
    opacity: 0,
    x: -50,
    y: 0,
  },
  end: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1000 }
  }
});

function Action({ boxState, children }) {
  return <OperateDiv pose={boxState ? "end" : "init"}>{children}</OperateDiv>;
}

function BoxAnimate({ children }) {
  const [active, setAnimate] = useState(false);
  const onChange = isVisible => {
    if (isVisible) {
      setAnimate(true);
    }
  };
  return (
    <VisibilitySensor onChange={onChange} partialVisibility>
      {({ isVisible }) => {
        const content = isVisible || active;
        return (
          <div>
            <Action boxState={content}>{children}</Action>
          </div>
        );
      }}
    </VisibilitySensor>
  );
}
/*end*/

class HeadPhoto extends React.Component {
  render() {
    return (
      <BoxAnimate>
        <div className="headphoto">
          <img src={imgHeadPhoto} className="roundedimage" alt="headphoto"></img>
        </div>
        <div className="headphotomessage">
          <i><IoMdPerson /> marcus huang<br /></i>
          <i><IoMdMail /> saiboy211@gmail.com<br /></i>
          <i><IoIosPhonePortrait /> 0919-243188<br /></i>
          <i><IoIosFlag /> taipei, taiwan</i>
        </div>
        <br />
      </BoxAnimate>
    )
  }
}

export default HeadPhoto
