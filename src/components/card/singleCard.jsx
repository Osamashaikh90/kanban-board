import React from "react";
import { PiWarningCircleFill } from "react-icons/pi";
import { BsFillCircleFill } from "react-icons/bs";
import { useCardContext } from "../../context/cardContext";
import "./SingleCard.css";
const SingleCard = () => {
  // const { isLoading, isError, cards } = useCardContext();
  // console.log(cards);
  return (
    <>
      <div className="card-container">
        <div className="card-heading">
          <span style={{ textTransform: "uppercase", color: "gray" }}>
            CAM 1
          </span>
          <div className="profile">
            <img
              className="profile-pic"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
              alt="profile"
            />
            <div className="status"></div>
          </div>
        </div>
        <div className="card-title " style={{ display: "flex", gap: "3px" }}>
          <span>{/* <input type="radio" name="" className="radio" /> */}</span>
          <p style={{ fontWeight: "550" }}>
            Implement E-mail Notification woooowiyaaa
          </p>
        </div>
        <div className="tag">
          <div className="sub-tag">
            <span style={{ color: "#525252" }}>
              <PiWarningCircleFill />
            </span>
          </div>
          <div className="sub-tag">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
