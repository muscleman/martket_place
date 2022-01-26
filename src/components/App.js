import _ from "lodash";
import React, { useEffect, useContext } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import NewOffer from "./NewOffer";

import { getOffersFromDaemon } from "../helpers";

import { Store } from "../store/store-reducer";
import { updateOffers, setLoading } from "../store/actions";

const App = () => {
  const { state, dispatch } = useContext(Store);

  const getOffers = async () => {
    setLoading(dispatch, true);

    const { keyword } = state;
    const result = await getOffersFromDaemon(keyword);
    if (result.offers) {
      updateOffers(dispatch, {
        totalOffers: result.total_offers,
        offersList: result.offers,
      });
    } else {
      updateOffers(dispatch, {
        totalOffers: [],
        offersList: 0,
      });
    }
    setLoading(dispatch, false);
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
      {state.newOfferPopup ? <NewOffer /> : <Content />}
      <Footer />
    </div>
  );
};

export default App;
