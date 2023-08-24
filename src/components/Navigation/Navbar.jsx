import React, { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineDown } from "react-icons/ai";
import "./Navbar.css";
const Navbar = () => {
  const [display, setDisplay] = useState(false);
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
              <div style={{ display: "flex", gap: "4rem", padding: "3px" }}>
                <label style={{ width: "100%" }}>Grouping</label>
                <select className="select-text">
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div style={{ display: "flex", gap: "4rem" }}>
                <label style={{ width: "100%" }}>Ordering</label>
                <select className="select-text">
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
