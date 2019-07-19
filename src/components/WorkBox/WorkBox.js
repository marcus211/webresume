import React from 'react';
import './WorkBox.css';
import 'react-circular-progressbar/dist/styles.css';
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
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
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
