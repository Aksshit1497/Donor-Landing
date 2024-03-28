import React from "react";
import "./Banner.scss";
import rightCircle from "../../Assets/right-circle.png";
import leftCircle from "../../Assets/left-circle.png";

const Banner = () => {
  return (
    <>
      <div className="">
        <div className="banner">
          <img src={leftCircle} alt="left circle" className="left" />
          <p>
            Send direct micro scholarships to 250 MnK-12 Indian Students to
            encourage them to improve their learning outcomes and literacy
            levels.
          </p>
          <img src={rightCircle} alt="right circle" className="right" />
        </div>
      </div>
    </>
  );
};

export default Banner;
