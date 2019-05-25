import React from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

class ScrollTop extends React.Component {    
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
        <div>
            <Link
            activeClass="active"
            to="HomePage"
            spy={true}
            smooth={true}
            >
    　　　      <FaArrowAltCircleUp id="goTop" className="uparrow" onClick={this.scrollToTop}/>
　　　　    </Link>   
　　    </div>
        )
    }
}

export default ScrollTop