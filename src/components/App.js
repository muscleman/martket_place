import _ from "lodash";
import React, { useEffect, useContext } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import NewOffer from "./NewOffer";
import Notification from "./Notification";

import { getOffersFromDaemon } from "../helpers";

import { Store } from "../store/store-reducer";
import { updateOffers, setMessage } from "../store/actions";

const App = () => {
  const { state, dispatch } = useContext(Store);

  const getOffers = async () => {
    setMessage(dispatch, {
      isLoading: true,
      type: "loading",
      text: "Loading offers...",
    });
    const { keyword } = state;
    try {
      const result = await getOffersFromDaemon(keyword);
      if (result.offers) {
        updateOffers(dispatch, {
          totalOffers: result.total_offers,
          offersList: result.offers,
        });
      } else {
        updateOffers(dispatch, {
          totalOffers: 0,
          offersList: [],
        });
      }
      setMessage(dispatch, {
        isLoading: false,
        type: null,
        text: null,
      });

      console.log(state);
    } catch (err) {
      setMessage(dispatch, {
        isLoading: true,
        type: "error",
        text: "Something went wrong",
      });
    }
  };

  // const throttleSearch = _.debounce((term) => {
  //   getOffersFromDaemon(keyword);
  // }, 300);

  useEffect(() => {
    getOffers();
  }, [state.keyword]);

  return (
    <div className="container">
      <Header />
      {state.message.isLoading && <Notification />}
      {state.newOfferPopup ? <NewOffer /> : <Content />}
      <Footer />
    </div>
  );
};

export default App;
