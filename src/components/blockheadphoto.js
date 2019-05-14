import React from 'react';
import headimage from '../img/headphoto.jpg';

class BlockHeadPhoto extends React.Component {
  render() {
    return (
      <div>      
        <div className="headphoto">
          <img src={headimage} className="roundedimage" alt="headphoto"></img>
        </div>
        <div className="headphotomessage">
          <text>
            marcus, huang<br/>
            saiboy211@gmail.com<br/>
            09xx-XXXXXX<br/>
            taipei, taiwan<br/>
          </text>
        </div>
      </div>
    )
  }
}

export default BlockHeadPhoto
