import React from 'react';
import headimage from '../img/headphoto.jpg';

class BlockHeadPhoto extends React.Component {
  render() {
    return (
      <div className="headphoto">
        <img src={headimage} className="roundedimage" alt="headphoto"></img>
      </div>
    )
  }
}

export default BlockHeadPhoto
