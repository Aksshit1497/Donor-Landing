import React from "react";
import "./Main.scss";
import parentPic from "../../Assets/parents.png";
import book from "../../Assets/book-icon.svg";
import paint from "../../Assets/paint-icon.svg";
import cap from "../../Assets/cap-icon.svg";
import globe from "../../Assets/globe-icon.svg";
import bulb from "../../Assets/bulb-icon.svg";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="heading-content">
          <div className="heading">
            <h1>
              Building Merit through <span> Microscholarships </span>
            </h1>
            <p>
              Your donation helps K-12 Students improve their learning levels,
              stay in school and helps teachers receive learning data.
            </p>
          </div>
        </div>
        <div className="main-content">
          <div className="left-side">
            <div className="sub-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
              >
                <g clip-path="url(#clip0_2552_234)">
                  <path
                    d="M18.5 37.0001C28.7173 37.0001 37.0001 28.7173 37.0001 18.5C37.0001 8.28275 28.7173 0 18.5 0C8.28275 0 0 8.28275 0 18.5C0 28.7173 8.28275 37.0001 18.5 37.0001Z"
                    fill="#FBD303"
                  />
                  <path
                    d="M30.9647 25.7413V23.7706C30.9647 21.8984 29.3635 20.3711 27.3928 20.3711H9.6071C7.63638 20.3711 6.03516 21.8984 6.03516 23.7706V25.7413H30.9647Z"
                    fill="#74594E"
                  />
                  <path
                    d="M22.1224 23.4028C20.4966 26.1617 16.4812 26.1617 14.8555 23.4028C14.8555 21.8262 14.8555 20.225 14.8555 18.6484C17.2696 18.6484 19.7083 18.6484 22.1224 18.6484C22.1224 20.225 22.1224 21.8262 22.1224 23.4028Z"
                    fill="#F0BA7A"
                  />
                  <path
                    d="M31.8279 26.1103C31.6062 25.1742 30.8671 24.4352 29.8818 24.1149L23.0829 22.0703L21.4078 23.6223L15.5696 23.6469L13.6973 22.0703L7.12014 24.1149C6.13478 24.4352 5.42041 25.1988 5.17405 26.1103L4.16406 30.1749C7.5389 34.3379 12.712 36.9984 18.5009 36.9984C24.2899 36.9984 29.463 34.3379 32.8624 30.1749L31.8279 26.1103Z"
                    fill="#F1F3F7"
                  />
                  <path
                    d="M18.3997 19.2408C23.4335 19.2408 27.5142 15.1601 27.5142 10.1262C27.5142 5.09243 23.4335 1.01172 18.3997 1.01172C13.3659 1.01172 9.28516 5.09243 9.28516 10.1262C9.28516 15.1601 13.3659 19.2408 18.3997 19.2408Z"
                    fill="#393D47"
                  />
                  <path
                    d="M21.6548 6.625C19.0682 12.0198 12.8605 11.3547 10.9883 11.0098V13.8427C10.9883 17.9319 14.3139 21.2575 18.4031 21.2575C22.4923 21.2575 25.8179 17.9319 25.8179 13.8427V10.4679C22.3938 10.1969 21.6548 6.625 21.6548 6.625Z"
                    fill="#F7CFA2"
                  />
                  <path
                    d="M8.5 34.0449C9.33752 34.5869 10.249 35.0795 11.1851 35.4737V22.6641H8.5V34.0449Z"
                    fill="#886C60"
                  />
                  <path
                    d="M25.8438 35.4737C26.7799 35.0795 27.6666 34.5868 28.5288 34.0449V22.6641H25.8438V35.4737Z"
                    fill="#886C60"
                  />
                  <path
                    d="M19.1405 23.6719H17.8349L16.0859 25.7657L17.5147 27.835L16.1352 36.851C16.8988 36.9495 17.6872 36.9988 18.5 36.9988C19.3129 36.9988 20.1013 36.9495 20.8649 36.851L19.4608 27.835L20.8895 25.7657L19.1405 23.6719Z"
                    fill="#4B5AA7"
                  />
                  <path
                    d="M14.8778 20.6445L18.4004 23.6745L15.5675 27.8376L13.6953 22.0733L14.8778 20.6445Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M22.0226 20.6445L18.5 23.6745L21.3329 27.8376L23.2051 22.0733L22.0226 20.6445Z"
                    fill="#FCFCFD"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2552_234">
                    <rect width="37" height="37" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>
                <span>1.5Mn</span> Students are waiting for your support
              </p>
            </div>

            <div className="donate-box">
              <h3>Make a Secure Donation</h3>
              <div className="d-buttons">
                <button>₹ 10,000</button>
                <button>₹ 20,000</button>
                <button>₹ 30,000</button>
                <button>₹ 50,000</button>
              </div>
              <input type="text" placeholder="Enter custom amount here" />
              <button className="donote-nowBtn">Donate now</button>
            </div>
          </div>

          <div className="right-side">
            <div className="top-icons">
              <img src={bulb} className="bulb" />
              <img src={cap} className="cap" />
              <img src={book} className="book" />
              <img src={paint} className="paint" />
              <img src={globe} className="globe" />
            </div>
            <div>
              <img src={parentPic} className="parent-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
