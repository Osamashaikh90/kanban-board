import React from "react";
import SingleCard from "./singleCard";

const CardList = ({ id, title, tag }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
      <SingleCard id={id} title={title} tag={tag} />
    </div>
  );
};

export default CardList;
