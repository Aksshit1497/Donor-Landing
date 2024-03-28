import React from "react";
import quizzesIcon from "../../Assets/quizzes-taken.svg";
import teachersIcon from "../../Assets/teachers.svg";
import statsIcon from "../../Assets/stats.svg";
import partnersIcon from "../../Assets/partners.svg";
// import quizzesIcon from "../../Assets/quizzes-taken.svg";
import "./Stats.scss";

const Stats = () => {
  return (
    <>
      <div className="stats">
        <div className="block">
          <div className="stats-img">
            <img src={quizzesIcon} />
          </div>
          <h5>1.5Mn</h5>
          <p>App Downloads</p>
        </div>
        <div className="block">
          <div className="stats-img">
            <img src={quizzesIcon} />
          </div>
          <h5>4.7Mn</h5>
          <p>Quizzes Taken</p>
        </div>
        <div className="block">
          <div className="stats-img">
            <img src={teachersIcon} />
          </div>
          <h5>190K</h5>
          <p>Teachers Registered</p>
        </div>
        <div className="block">
          <div className="stats-img">
            <img src={statsIcon} />
          </div>
          <h5>26</h5>
          <p>State MoUs</p>
        </div>
        <div className="block">
          <div className="stats-img">
            <img src={partnersIcon} />
          </div>
          <h5>175+</h5>
          <p>Edtech Partners</p>
        </div>
      </div>
    </>
  );
};

export default Stats;
