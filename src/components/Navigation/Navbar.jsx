import React, { useState, useEffect } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineDown } from "react-icons/ai";
import "./Navbar.css";
import { useCardContext } from "../../context/cardContext";
import { useSelectedCardsContext } from "../../context/selectedCardContext";

const storeGroup = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
};

const storeOrder = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
};
const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const [groupingValue, setGroupingValue] = useState(storeGroup);
  const [orderingValue, setOrderingValue] = useState(storeOrder);
  const handleGroupValue = (e) => {
    setGroupingValue(e.target.value);
    setDisplay(!display);
    localStorage.setItem("group", e.target.value);
  };
  const handleOrderValue = (e) => {
    setOrderingValue(e.target.value);
    setDisplay(!display);
    localStorage.setItem("order", e.target.value);
  };
  const { cards } = useCardContext();
  const { tickets, users } = cards;
  const { selectedCards, selectCards } = useSelectedCardsContext();
  useEffect(() => {
    if (groupingValue === "user") {
      selectedCards(groupingValue, { tickets, users }, orderingValue);
    } else {
      selectedCards(groupingValue, cards.tickets, orderingValue);
      console.log(selectCards);
    }
  }, [cards, tickets, users, groupingValue, orderingValue]);
  return (
    <>
      <nav className="navbar">
        <div className="display-section">
          <button onClick={() => setDisplay(!display)}>
            <GiSettingsKnobs className="icon" />
            Display
            <AiOutlineDown className="icon-1" />
          </button>
          {display && (
            <div className="display-card">
              <div className="display">
                <label style={{ width: "100%" }}>Grouping</label>
                <select
                  className="select-text"
                  value={groupingValue}
                  onChange={(e) => handleGroupValue(e)}
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="display">
                <label style={{ width: "100%" }}>Ordering</label>
                <select
                  className="select-text"
                  value={orderingValue}
                  onChange={(e) => handleOrderValue(e)}
                >
                  <option value="priority">priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
