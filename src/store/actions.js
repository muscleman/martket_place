export const setLoading = (dispatch, loading) => {
  return dispatch({
    type: "SET_LOADING",
    payload: loading,
  });
};

export const updateOffers = (dispatch, offers) => {
  return dispatch({
    type: "OFFERS_UPDATED",
    payload: offers,
  });
};

export const updateSearchKeyword = (dispatch, keyword) => {
  return dispatch({
    type: "SEARCH_KEYWORD",
    payload: keyword,
  });
};

export const newOfferPopup = (dispatch, popup) => {
  return dispatch({
    type: "OFFER_POPUP",
    payload: popup,
  });
};
