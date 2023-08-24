import React from "react";
import { useCardContext } from "../../context/cardContext";
import SingleCard from "./singleCard";

const CardList = () => {
  const { cards } = useCardContext;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
      <SingleCard />
      <SingleCard />
    </div>
  );
};

export default CardList;
