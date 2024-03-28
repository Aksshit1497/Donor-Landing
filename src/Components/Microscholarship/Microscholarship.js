import React from "react";
import mindsetIcon from "../../Assets/Mindset.svg";
import competencies from "../../Assets/Competencies.svg";
import incentivizes from "../../Assets/Incentivizes.svg";
import qualityIcon from "../../Assets/Quality Education.svg";
import "./Microscholarship.scss";
import studentPic from "../../Assets/microscholarship-student.png";
import rocketIcon from "../../Assets/rocket.svg";
import capIcon from "../../Assets/cap-icon.svg";
import abcIcon from "../../Assets/abc.svg";
import numberIcon from "../../Assets/123.svg";

const Microscholarship = () => {
  return (
    <>
      <div className="microscholarship">
        <div className="micro-img-section">
          <div className="micro-img">
            <img src={studentPic} alt="Student Pic" />
          </div>

          <p>
            Auro Scholar is inspired by the micro-incentive as motivational
            rewards theory by Abhijit Banerjee, Esther Duflo and Michael Kremer
            (Nobel Prize 2019)
          </p>
        </div>
        <div className="mircro-content">
          <div className="heading">
            <h2>How your Microscholarship Helps?</h2>
          </div>
          <div className="scholarship-steps">
            <div className="steps">
              <div className="icon">
                <img src={incentivizes} alt="Learning Icon" />
              </div>
              <div className="steps-content">
                <h5>Incentivizes Learning</h5>
                <p>
                  Each Micro Scholarship incentivizes students to aim higher and
                  improve their learning levels
                </p>
              </div>
            </div>
            <div className="steps">
              <div className="icon">
                <img src={competencies} alt="Competencies Icon" />
              </div>
              <div className="steps-content">
                <h5>Builds Competencies</h5>
                <p>
                  Quiz Assessments build a child's competencies across 5
                  subjects
                </p>
              </div>
            </div>
            <div className="steps">
              <div className="icon">
                <img src={mindsetIcon} alt="Mindset Icon" />
              </div>
              <div className="steps-content">
                <h5>Builds Growth Mindset</h5>
                <p>
                  Multiple retakes helps develop a habit of continuous learning,
                  self evaluation, confidence
                </p>
              </div>
            </div>
            <div className="steps">
              <div className="icon">
                <img src={qualityIcon} alt="Quality Icon" />
              </div>
              <div className="steps-content">
                <h5>Improves Access to Quality Education</h5>
                <p>
                  Students and families from government schools benefit from
                  quality education and funds
                </p>
              </div>
            </div>
          </div>
          <div className="micro-content-cta">
            <button className="">Start My Journey</button>
          </div>
          <div className="micro-content-icons">
            <img src={rocketIcon} />
            <img src={numberIcon} />
            <img src={capIcon} />
            <img src={abcIcon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Microscholarship;
