import React, { useContext, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import NewOffer from "./NewOffer";
import Notification from "./Notification";
import Pagination from "./Pagination";
import { getOffersFromDaemon } from "../helpers";
import { Store } from "../store/store-reducer";
import { setMessage, setMyOfferIds, updateOffers } from "../store/actions";
import { useCookies } from "react-cookie";

const App = () => {
  const { state, dispatch } = useContext(Store);
  const [cookies] = useCookies();

  const getOffers = async () => {
    setMessage(dispatch, {
      isLoading: true,
      type: "loading",
      text: "Loading offers...",
    });
    const { keyword, pagination } = state;
    try {
      const result = await getOffersFromDaemon(keyword, pagination.limit, pagination.offset);

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

    } catch (err) {
      setMessage(dispatch, {
        isLoading: true,
        type: "error",
        text: "Something went wrong",
      });
    }
  };

  useEffect(() => {
    setMyOfferIds(dispatch, cookies?.myOfferIds || []);
  }, [dispatch, cookies]);

  useEffect(() => {
    getOffers().then();
  }, [state.keyword, state.pagination]);



  return (
    <div className="wrapper">
      <Header/>
      <main>
        { state.message.isLoading && <Notification/> }
        { state.newOfferPage ? <NewOffer/> : <Content/> }
        { (!state.newOfferPage && state.offers.totalOffers > 10) && <Pagination/> }
      </main>
      <Footer/>
    </div>
  );
};

export default App;
