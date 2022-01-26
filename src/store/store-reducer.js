import { createContext, useReducer } from "react";

const initialState = {
  keyword: "",
  offers: {
    totalOffers: 0,
    offersList: [],
  },
  newOfferPopup: false,
  daemonOnline: false,
  loading: true,
};

export const Store = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "OFFERS_UPDATED":
      return { ...state, offers: action.payload };
    case "SEARCH_KEYWORD":
      return { ...state, keyword: action.payload };
    case "OFFER_POPUP":
      return { ...state, newOfferPopup: action.payload };
    default:
      return state;
  }
};

// This is used to inject the Store at the top level in the index.js file
export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
