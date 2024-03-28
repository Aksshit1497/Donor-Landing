import React from "react";
import "./Info.scss";
import redProgress from "../../Assets/red-progress.svg";
import greenProgress from "../../Assets/green-progress.svg";
import blueProgress from "../../Assets/blue-progress.svg";

const Info = () => {
  return (
    <>
      <div className="info">
        <div className="info-block">
          <div className="info-stats">
            <p>57.50% </p>
            <img src={redProgress} alt="Progress" />
          </div>
          <p>
            Unable to <br /> perform simple division
          </p>
        </div>
        <div className="info-block">
          <div className="info-stats">
            <p>47% </p>
            <img src={greenProgress} alt="Progress" />
          </div>
          <p>Cannot read a simple sentence in English</p>
        </div>
        <div className="info-block">
          <div className="info-stats">
            <p>25% </p>
            <img src={blueProgress} alt="Progress" />
          </div>
          <p>Cannot read a basic native language text</p>
        </div>
      </div>
      <div className="info-by">
        <p>ASER report 2017</p>
      </div>
    </>
  );
};

export default Info;
