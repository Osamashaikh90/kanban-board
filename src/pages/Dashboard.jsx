import React from "react";
import CardList from "../components/card/cardList";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { PiDotsThreeBold } from "react-icons/pi";
import { useCardContext } from "../context/cardContext";
import "./Dashboard.css";
import { useEffect } from "react";
import { useSelectedCardsContext } from "../context/selectedCardContext";
const Dashboard = () => {
  const { cards } = useCardContext();
  const { selectedCards, selectCards } = useSelectedCardsContext();
  console.log(cards);
  useEffect(() => {
    selectedCards("status", cards.tickets, "title");
    console.log(selectCards);
    console.log(cards);
  }, [cards]);
  return (
    <>
      <div className="dashboard-container">
        <div className="inner-container">
          <div className="dashboard-heading ">
            <div className="left" style={{ display: "flex", columnGap: "5px" }}>
              <BsPencilSquare />
              <div className="dashboard-profile">
                <img
                  className="dashboard-profile-pic"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                  alt="profile"
                />
              </div>
              <span style={{ fontWeight: "500" }}>Osama</span>
            </div>
            <div
              className="right"
              style={{ display: "flex", columnGap: "5px" }}
            >
              <AiOutlinePlus />
              <PiDotsThreeBold />
            </div>
          </div>
          <CardList />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
