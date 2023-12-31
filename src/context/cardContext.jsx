import { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";
import cardReducer from "../reducer/cardReducer";

const CardContext = createContext();
const API = "https://api.quicksell.co/v1/internal/frontend-assignment";
const initialState = {
  isLoading: false,
  isError: false,
  cards: [],
};
const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, initialState);
  const getCards = async (api_url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(api_url); //Abstraction of business logic
      const cards = await res.data;
      console.log(cards);
      dispatch({ type: "SET_SINGLE_CARD", payload: cards });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getCards(API);
  }, []);
  return (
    <CardContext.Provider value={{ ...state, getCards, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};

const useCardContext = () => {
  return useContext(CardContext);
};

export { CardProvider, CardContext, useCardContext };
