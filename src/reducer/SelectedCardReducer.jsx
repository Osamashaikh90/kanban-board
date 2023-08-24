const SelectedCardReducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_SELECTED_CARDS":
      return {
        ...state,
        isLoading: false,
        selectCards: action.payload.selectedData,
        user: action.payload.showProfile,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default SelectedCardReducer;
