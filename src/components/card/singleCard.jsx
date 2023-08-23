import React from "react";
import { useCardContext } from "../../context/cardContext";

const SingleCard = () => {
  const { isLoading, isError, cards } = useCardContext();
  console.log(cards);
  return (
    <>
      <div className="card-container">hi</div>
    </>
  );
};

export default SingleCard;
