import _ from "lodash";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Filters from "./Filters";
import Content from "./Content";
import Footer from "./Footer";
import NewOffer from "./NewOffer";

const App = () => {
  const [totalOffers, setTotalOffers] = useState(0);
  const [offers, setOffers] = useState([]);
  const [showOfferPopup, setShowOfferPopup] = useState(false);

  const getOffers = async (offset = 0, term = "") => {
    try {
      const res = await axios.post("/json_rpc", {
        jsonrpc: "2.0",
        id: "0",
        method: "marketplace_global_get_offers_ex",
        params: {
          filter: {
            amount_low_limit: 0,
            amount_up_limit: 0,
            bonus: false,
            category: "",
            fake: false,
            keyword: term,
            limit: 100,
            location_city: "",
            location_country: "",
            offer_type_mask: 0,
            offset: offset,
            order_by: 0,
            primary: "",
            rate_low_limit: "0.000000",
            rate_up_limit: "0.000000",
            reverse: false,
            target: "",
            timestamp_start: 0,
            timestamp_stop: 0,
          },
        },
      });
      if (res.data.result.offers && offset !== 0) {
        setOffers([...offers, ...res.data.result.offers]);
        setTotalOffers(res.data.result.total_offers);
      }
      if (res.data.result.offers) {
        setOffers(res.data.result.offers);
        setTotalOffers(res.data.result.total_offers);
      } else {
        setOffers([]);
      }
    } catch (e) {
      console.log("fetch error", e);
    }
  };

  const throttleSearch = _.debounce((term) => {
    getOffers(0, term);
  }, 300);

  const openPopup = () => {
    showOfferPopup ? setShowOfferPopup(false) : setShowOfferPopup(true);
  };

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <div className="container">
      <Header openPopup={openPopup} isOpen={showOfferPopup} />
      {showOfferPopup && <NewOffer />}
      {!showOfferPopup && <Search onTermSubmit={throttleSearch} />}
      {!showOfferPopup && (
        <Content
          offers={offers}
          totalOffers={totalOffers}
          getOffers={getOffers}
        />
      )}
      <Footer totalOffers={totalOffers} />
    </div>
  );
};

export default App;
