import { createContext, useReducer, useContext } from "react";
import SelectedCardReducer from "../reducer/SelectedCardReducer";

const SelectedCardContext = createContext();
const initialState = {
  isLoading: false,
  isError: false,
  selectCards: [],
};

const SelectedCardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SelectedCardReducer, initialState);
  const selectedCards = async (groupingCards, allCards, orderingCards) => {
    try {
      dispatch({ type: "SET_SELECTED_LOADING" });

      let showProfile = false;
      let cardSet = new Set();
      let cardData = [],
        selectedData = [];

      if (groupingCards === "status") {
        allCards.forEach((currElem) => {
          cardSet.add(currElem.status);
        });

        cardData = [...cardSet];

        cardData.forEach((currElem, index) => {
          let arr = allCards.filter((currEelem) => {
            return currElem === currEelem.status;
          });
          selectedData.push({
            [index]: {
              title: currElem,
              value: arr,
            },
          });
        });
      } else if (groupingCards === "user") {
        showProfile = true;
        console.log(allCards);
        allCards?.users?.forEach((elem, index) => {
          cardData = allCards?.tickets?.filter((currEelem) => {
            return elem.id === currEelem.userId;
          });

          selectedData.push({
            [index]: {
              title: elem.name,
              value: cardData,
            },
          });
        });
      } else {
        let prior_list = ["No priority", "Low", "Medium", "High", "Urgent"];

        prior_list.forEach((currElem, index) => {
          cardData = allCards.filter((elem) => {
            return index === elem.priority;
          });

          selectedData.push({
            [index]: {
              title: currElem,
              value: cardData,
            },
          });
        });
      }

      if (orderingCards === "title") {
        selectedData.forEach((elem, index) => {
          elem[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
        });
      }

      if (orderingCards === "priority") {
        selectedData.forEach((elem, index) => {
          elem[index]?.value?.sort((a, b) => b.priority - a.priority);
        });
      }

      dispatch({
        type: "SET_SELECTED_CARDS",
        payload: { selectedData, showProfile },
      });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  return (
    <SelectedCardContext.Provider value={{ ...state, selectedCards, dispatch }}>
      {children}
    </SelectedCardContext.Provider>
  );
};

const useSelectedCardsContext = () => {
  return useContext(SelectedCardContext);
};

export { SelectedCardProvider, useSelectedCardsContext };
