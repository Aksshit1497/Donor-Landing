import React from "react";
import "./Footer.scss";
import location from "../../Assets/location.svg";
import call from "../../Assets/call.svg";
import email from "../../Assets/email.svg";
import socialIcons from "../../Assets/social-icons.svg";
import googlePlay from "../../Assets/google-play.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="contactInfo">
          <h2>Get In Touch</h2>
          <div>
            <p>
              <img src={location} alt="Location" />
              Sri Aurobindo Society Campus, Shaheed Jeet Singh Marg, Adchini,
              New Delhi, Delhi 110017
            </p>
            <p>
              <img src={call} alt="Call" />
              09667480783
            </p>
            <p>
              <img src={email} alt="Email" />
              info.auroscholar.com
            </p>
          </div>
        </div>
        <div className="qlinks">
          <h2>Quick Links</h2>
          <div>
            <ul>
              <li>About Auroscholar</li>
              <li>Privacy Policy</li>
              <li>FAQ's</li>
              <li>Terms & Condition</li>
              <li>Blog</li>
              <li>Sign in</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="socials">
          <div className="app-link">
            <p>Download our App from</p>
            <img src={googlePlay} alt="Google Play" />
          </div>
          <div className="social-link">
            <p>Share this vision with your network</p>
            <div>
              <img src={socialIcons} alt="facebook" />
              {/* <img src="" alt="instagram" /> */}
              {/* <img src="" alt="linkedn" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2021 - All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
