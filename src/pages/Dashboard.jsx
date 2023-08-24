import React from "react";
import CardList from "../components/card/cardList";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { PiDotsThreeBold } from "react-icons/pi";

import "./Dashboard.css";

import { useSelectedCardsContext } from "../context/selectedCardContext";
const Dashboard = () => {
  const { selectCards, user } = useSelectedCardsContext();

  return (
    selectCards && (
      <div className="dashboard-container">
        {selectCards.map((curElem, index) => (
          <div key={index} className="inner-container">
            <div className="dashboard-heading ">
              <div
                className="left"
                style={{ display: "flex", columnGap: "5px" }}
              >
                {!user ? (
                  <BsPencilSquare />
                ) : (
                  <>
                    <div className="dashboard-profile">
                      <img
                        className="dashboard-profile-pic"
                        src="https://i.imgur.com/Aw5z2TF.png"
                        alt="profile"
                      />
                    </div>
                  </>
                )}
                <span style={{ fontWeight: "500" }}>
                  {curElem[index]?.title} {curElem[index]?.value?.length}
                </span>
              </div>
              <div
                className="right"
                style={{ display: "flex", columnGap: "5px" }}
              >
                <AiOutlinePlus />
                <PiDotsThreeBold />
              </div>
            </div>
            {curElem[index]?.value?.map((elem, i) => {
              return (
                <CardList id={elem.id} title={elem.title} tag={elem.tag} />
              );
            })}
          </div>
        ))}
      </div>
    )
  );
};

export default Dashboard;
