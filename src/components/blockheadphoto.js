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
            name<br/>
            xxx@gmail.com<br/>
            09xx-XXXXXX<br/>
            city, country<br/>
            other
          </text>
        </div>
      </div>
    )
  }
}

export default BlockHeadPhoto
