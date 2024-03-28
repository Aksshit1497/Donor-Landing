import React from "react";
import "./Header.scss";
import logo from "../../Assets/logo.svg";
import bars from "../../Assets/3-bars.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={bars} alt="Nav Bars" className="bars" />
        <div>
          <img src={logo} alt="Auro Scholar Logo" />
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>How it works</li>
            <li>Impact</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div className="action-buttons">
          <button>Sign In</button>
          <button>Become a donor</button>
        </div>
      </div>
    </>
  );
};

export default Header;
