import React from 'react';
import logo from "./logo.png";
import './navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";

class BlockNavbar extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark  navbarfont bg-dark">
          <div className="navbar-brand" >
            <Link
              activeClass="active"
              to="HomePage"
              spy={true}
              smooth={true}
            >
              <img
                src={logo}
                className="toplogo"
                alt="Logo"
                onClick={this.scrollToTop}
              />
              Home
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapseButton"
            aria-expanded="True"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="collapseButton" className="collapse navbar-collapse" >
            <div className="navbar-nav ml-auto">
              <Link
                className="nav-item nav-link ml-auto"
                activeClass="active"
                to="Introduction"
                spy={true}
                smooth={true}
                offset={-80}
                duration={300}
              >
                Introduction
              </Link>
              <Link
                className="nav-item nav-link ml-auto"
                activeClass="active"
                to="worklist"
                spy={true}
                smooth={true}
                offset={-80}
                duration={300}
              >
                Experiences
              </Link>
              <Link
                className="nav-item nav-link ml-auto"
                activeClass="active"
                to="mainwork"
                spy={true}
                smooth={true}
                offset={-80}
                duration={300}
              >
                Skills
              </Link>
              <Link
                className="nav-item nav-link ml-auto"
                activeClass="active"
                to="other"
                spy={true}
                smooth={true}
                offset={-80}
                duration={300}
              >
                Portfolio
              </Link>
              <Link
                className="nav-item nav-link ml-auto"
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                offset={-80}
                duration={300}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default BlockNavbar
