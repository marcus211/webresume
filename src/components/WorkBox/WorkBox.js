import React from 'react';
import './WorkBox.css';
import 'react-circular-progressbar/dist/styles.css';
//use in <span>{d.icon}</span>
import { FaHtml5, FaServer, FaTools  } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
//https://www.npmjs.com/package/react-circular-progressbar
import VisibilitySensor from "react-visibility-sensor";
import { FadeIn } from "animate-css-styled-components";

class WorkBox extends React.Component {

  state = {
    visible: false,
  }

  onChange = (visibleState) => {
    // console.log('state' + visibleState)
    if (visibleState === !this.state.visible) {
      this.setState({
        visible: true
      })
      // console.log('state_if' + visibleState)
    }
  }
  render() {

    return (
      <div className="row">
        {this.props.data.map((d, k) => (
          <div key={k} className="col-sm-4">
            <div className='workBoxSquare'>
              <div className='workBoxCircle'>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    return (
                      <CircularProgressbar
                        value={isVisible ? d.value : 0}
                        text={`${isVisible ? d.value : 0}%`}
                        circleRatio={0.75}
                        background
                        backgroundPadding={3}
                        styles={buildStyles({
                          rotation: 1 / 2 + 1 / 8,
                          textColor: "rgb(0, 0, 0)",
                          pathColor: "rgb(0, 80, 140)",
                          backgroundColor: "rgb(200, 200, 200)",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
              </div>
            </div>
            <VisibilitySensor partialVisibility onChange={this.onChange}>

              <FadeIn>
                <div className='workBox'>
                  <p style={{ fontSize: '3em'}}>{d.icon}</p>
                  <strong style={{ textAlign: 'center' }}>{d.text}</strong><br />
                  <span>{d.content}</span>
                </div>
              </FadeIn>

            </VisibilitySensor>
          </div>
        ))}
      </div>

    )
  }
}

export default WorkBox
