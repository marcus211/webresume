import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import posed from "react-pose";
import './LinkBox.css';
import box001 from './work/001.png';
import box002 from './work/002.png';
import box003 from './work/003.png';
import box004 from './work/004.png';
import box005 from './work/005.png';
import box006 from './work/006.png';
import box007 from './work/007.png';
import box008 from './work/008.png';
import box009 from './work/009.png';

const linkblock = [
    { id: 1, weburl: "https://geo-genesis.firebaseapp.com/", imgurl: box001, text: "地創地質顧問有限公司" },
    { id: 2, weburl: "https://marcus211.github.io/webresume/index.html", imgurl: box002, text: "個人履歷網站" },
    { id: 3, weburl: "https://marcus211.github.io/2019routedemo/index.html", imgurl: box003, text: "2019地質嘉年華－路跑路線圖" },
    { id: 4, weburl: "https://webfindramen.firebaseapp.com", imgurl: box004, text: "拉麵找網站" },
    { id: 5, weburl: "https://chrome.google.com/webstore/detail/fcjcpopamkkkfmibbicegepjaoepmjjh", imgurl: box005, text: "簡易抽籤筒" },
    { id: 6, weburl: "https://geo-genesis.firebaseapp.com/vr_F5/vrf5.html", imgurl: box006, text: "臺灣的山脈VR" },
    { id: 7, weburl: "https://webgeomap.firebaseapp.com/", imgurl: box007, text: "Simple Geomap" },
    { id: 8, weburl: "https://chrome.google.com/webstore/detail/jlgohboikgmkehjaficdhekocmnohiph", imgurl: box008, text: "簡易坐標轉換" },
    { id: 9, weburl: "https://reactmaskmap.firebaseapp.com/", imgurl: box009, text: "找口罩地圖" },
];

/*react-pose component*/
/*start*/
const OperateDiv = posed.div({
    init: {
        scale: 0.5,
        opacity: 0,
        x: 0,
        y: 50
    },
    end: {
        scale: 1,
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 500 }
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

//https://stackoverflow.com/questions/30202755/react-router-open-link-in-new-tab
class LinkBlock extends React.Component {
    render() {
        return (
            <div className="box">
                {this.props.data.map((d) => {
                    return <BoxAnimate>
                        <a
                            href={d.weburl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={d.imgurl} className="boxstyle" alt="" />
                        </a>
                    </BoxAnimate>
                })
                }
            </div>
        )
    }
}

class BoxFlex extends React.Component {
    render() {
        return (
            <div>
                <LinkBlock data={linkblock} />
            </div>
        )
    }
}

export default BoxFlex;