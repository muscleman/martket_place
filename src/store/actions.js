export const setMessage = (dispatch, message) => {
  return dispatch({
    type: "SET_MESSAGE",
    payload: message,
  });
};

export const updateOffers = (dispatch, offers) => {
  return dispatch({
    type: "OFFERS_UPDATED",
    payload: offers,
  });
};

export const setPagination = (dispatch, pagination) => {
  return dispatch({
    type: "SET_PAGINATION",
    payload: pagination,
  });
};

export const updateSearchKeyword = (dispatch, keyword) => {
  return dispatch({
    type: "SEARCH_KEYWORD",
    payload: keyword,
  });
};

export const newOfferPage = (dispatch, value) => {
  return dispatch({
    type: "NEW_OFFER_PAGE",
    payload: value,
  });
};

export const myOffersPage = (dispatch, value) => {
  return dispatch({
    type: "MY_OFFERS_PAGE",
    payload: value,
  });
};

export const setMyOfferIds = (dispatch, value) => {
  return dispatch({
    type: "MY_OFFER_IDS",
    payload: value,
  });
};

export const addIdInMyOfferIds = (dispatch, id) => {
  return dispatch({
    type: "ADD_ID_IN_MY_OFFER_IDS",
    payload: id,
  });
};