import React from "react";
import "./Process.scss";
import quizIcon from "../../Assets/quiz.svg";
import improveIcon from "../../Assets/improve.svg";
import winIcon from "../../Assets/win.svg";
import bankIcon from "../../Assets/bank.svg";
import aurosholarImg from "../../Assets/auroscholar-works.svg";
import clockIcon from "../../Assets/clock.svg";
import capIcon from "../../Assets/cap-icon.svg";
import numberIcon from "../../Assets/123.svg";
import abcIcon from "../../Assets/abc.svg";

const Process = () => {
  return (
    <>
      <div className="process">
        <div className="process-content">
          <div className="heading">
            <h2>How AuroScholar Works?</h2>
            <p>On Auro Scholar, a Student can :</p>
          </div>
          <div className="steps">
            <div className="steps-block">
              <div className="icon">
                <img src={quizIcon} alt="Quiz Icon" />
              </div>
              <div className="steps-content">
                <h5>Take quizzes to win scholarship</h5>
                <p>
                  Take a quiz to win micro scholarship Win Rs.50/quiz on scoring
                  80% and above
                </p>
              </div>
            </div>
            <div className="steps-block">
              <div className="icon">
                <img src={improveIcon} alt="Improve Icon" />
              </div>
              <div className="steps-content">
                <h5>Improve subject mastery</h5>
                <p>
                  Attempt quizzes across 5 subjects, improving subject mastery.
                  Retake quiz multiple times if they score less
                </p>
              </div>
            </div>
            <div className="steps-block">
              <div className="icon">
                <img src={winIcon} alt="Win Icon" />
              </div>
              <div className="steps-content">
                <h5>Win while learning everyday</h5>
                <p>Win up to Rs.1000/month, totaling Rs.12,000 per annum</p>
              </div>
            </div>
            <div className="steps-block">
              <div className="icon">
                <img src={bankIcon} alt="Bank Icon" />
              </div>
              <div className="steps-content">
                <h5>Directly transfer the amount</h5>
                <p>
                  Get a direct transfer of micro scholarship in bank in 3days.
                </p>
              </div>
            </div>
          </div>
          <div className="sub-info">
            <p>
              Teachers, parents receive learning analytics of student to help
              improve progress
            </p>
            <button>Become a Donor</button>
          </div>
        </div>
        <div className="process-img">
          <div className="process-img-icons">
            <img src={numberIcon} />
            <img src={abcIcon} />
            <img src={capIcon} />
            <img src={clockIcon} />
          </div>
          <div className="process-img-content">
            <p>UPI Bank Account Payment Supported</p>
            <p>9 Languages</p>
            <p>1st-12th Grade</p>
            <p>Multiple School Boards</p>
          </div>
          <div className="process-imgBlock">
            <img src={aurosholarImg} />
          </div>
          <div className="process-img-subContent">
            <p>
              Auro Scholar Quiz Assessments are Validated by Australian Council
              for Educational Research (ACER) a leading academic research
              organization
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
