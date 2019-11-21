import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import posed from "react-pose";
import styled from "styled-components";
import './introductionBox.css';

/*styled-components component*/
const MessageDiv = styled.div`
  flex: 1;
  flexWrap: 'wrap';
  font-size: 0.7em;
  color: rgb(100,100,100,1);
  -webkit-transition: 0.1s all ease-out;
  -o-transition: 0.1s all ease-out;
  transition: 0.3s all ease-out;
  padding: 5px 5px 5px 5px;
  :hover {
    color: rgb(0,0,0,1);
  }
`;

/*react-pose component*/
/*start*/
const OperateDiv = posed.div({
  init: {
    opacity: 0,
    x: 50,
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



class IntroductionBox extends React.Component {
  render() {
    return (
      <BoxAnimate>
        <div className="content">
          <div className="title">About Me</div>
          <MessageDiv>
            <br />　　畢業於成功大學地球科學系及研究所，已有5年工作經歷，2年半前因工作業務需要，開始接觸與所學專長不同領域的網頁開發技術，發現自己對網頁資訊領域這塊很有興趣，除了在台大系統資訊班進行研修外，也抽空在假日及空閒時間進行自學，磨練自己尋找答案及解決問題的能力。雖然離正式資訊工程師差幾步之遙，仍期許自己發揮所學知識及經驗應用於職場工作及專案開發上，並持續累積自身技術及成長發展，未來若有機會，也請多多指教！
          </MessageDiv>
        </div>
      </BoxAnimate>

    )
  }
}

export default IntroductionBox
