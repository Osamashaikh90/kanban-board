import React from "react";
import { BsFillCircleFill, BsFillExclamationSquareFill } from "react-icons/bs";
import "./SingleCard.css";
const SingleCard = ({ id, title, tag }) => {
  return (
    <>
      <div className="card-container">
        <div className="card-heading">
          <span style={{ textTransform: "uppercase", color: "gray" }}>
            {id}
          </span>
          <div className="profile">
            <img
              className="profile-pic"
              src="https://i.imgur.com/Aw5z2TF.png"
              alt="profile"
            />
            <div className="statusDot"></div>
          </div>
        </div>
        <div className="card-title " style={{ display: "flex", gap: "3px" }}>
          <span>{/* <input type="radio" name="" className="radio" /> */}</span>
          <p style={{ fontWeight: "550" }}>{title}</p>
        </div>
        <div className="tag">
          <div className="sub-tag">
            <span style={{ color: "#525252" }}>
              <BsFillExclamationSquareFill />
            </span>
          </div>
          <div className="sub-tag">
            {tag?.map((Elem, index) => {
              return (
                <div style={{ color: "gray" }}>
                  <span
                    style={{
                      marginRight: "5px",
                      color: "rgb(179, 178, 178)",
                      fontSize: "0.8rem",
                    }}
                  >
                    <BsFillCircleFill />
                  </span>
                  Feature Task
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
