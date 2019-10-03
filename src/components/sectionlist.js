import React from 'react';
import styled from "styled-components";
import { MdLabel　} from "react-icons/md";

/*styled-components component*/
const ListDiv = styled.div`
  width:70%;
  margin: 0px auto;
  padding: 10px 10px 10px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: rgb(255,255,255,0.5);
  -webkit-transition: 0.1s all ease-out;
  -o-transition: 0.1s all ease-out;
  transition: 0.3s all ease-out;
  text-align:left;
  :hover {
    position: relative;
    top: -2px;
    background: rgb(255,255,255, 0.5);
    color: rgb(0,0,0,1);
    -webkit-box-shadow: 2.5px 2.5px 5px 0px #000000;
            box-shadow: 2.5px 2.5px 5px 0px #000000;
  }
  :active {
    position: relative;
    top: 0px;
    background: rgb(54,54,54);
    -webkit-box-shadow: 0px 0px 0px 0px #000000;
            box-shadow: 0px 0px 0px 0px #000000;
  }
  :focus {
    outline:0;
  }
  @media screen and (max-width: 800px) {
    width:100%;
  }
`;

const WorkList = styled.div`
  margin: 5px 0px 5px 20px;
`;
const TextContent = styled.div`
  margin: 5px 0px 5px 40px;
`;
const HrDiv = styled.div`
  text-decoration: underline;
  margin: 30px 0px 5px 0px;
  font-size:1.5em;
  color: rgb(255,255,255,1);
`

class SectionList extends React.Component {
  render() {
    return (
      <div id="worklist" className="background_setup bg-img-02">
        <div className="chapterName">Experiences</div>
        <div className="container  text-center">
          <div className="row">
            <div className="col-sm-12">
                <HrDiv>工作經歷</HrDiv>
                <ListDiv>
                  <WorkList><MdLabel/>2016年 - 現今</WorkList>
                  <TextContent>
                  <strong>地創地質顧問有限公司 資訊檢測人員</strong><br/>
                  工作項目：網頁檢測工作、後臺資料建置、影像繪圖、線上諮詢、計畫細項支援  
                  </TextContent>
                </ListDiv>
                <br/>
                <ListDiv>
                  <WorkList><MdLabel/>2014年 - 2016年</WorkList>
                  <TextContent>
                  <strong>康鷹空間資訊有限公司 測量員</strong><br/>
                  外業項目：導線、水準及放樣測量、地形及管線測量工作<br/>
                  內業項目：測量資料計算、縱橫斷面繪製 
                  </TextContent>
                </ListDiv>
                <br/>
                <ListDiv>
                  <WorkList><MdLabel/>2013年 - 2014年</WorkList>
                  <TextContent>
                  <strong>捷堃應用地質技師事務所 地質工程師</strong><br/>
                  工作項目：影像出圖、地籍資料整理、數值地形分析、現場監工、邊坡監測及報告製作                     
                  </TextContent>
                </ListDiv>
                <br/>
                <HrDiv>學歷經歷</HrDiv>
                <ListDiv>
                  <WorkList><MdLabel/>2009年 - 2011年</WorkList>
                  <TextContent>
                  <strong>國立成功大學 地球科學系研究所</strong><br/>                  
                  </TextContent>
                </ListDiv>
                <br/>
                <ListDiv>
                  <WorkList><MdLabel/>2005年 - 2009年</WorkList>
                  <TextContent>
                  <strong>國立成功大學 地球科學系</strong><br/>                  
                  </TextContent>
                </ListDiv>
                <br/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionList
