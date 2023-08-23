import React from "react";
import { useCardContext } from "../../context/cardContext";
import SingleCard from "./singleCard";

const CardList = () => {
  const { cards } = useCardContext;
  return (
    <div>
      <SingleCard />
    </div>
  );
};

export default CardList;
