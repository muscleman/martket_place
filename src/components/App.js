import _ from "lodash";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Filters from "./Filters";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  const [totalOffers, setTotalOffers] = useState(0);
  const [offers, setOffers] = useState([]);

  const getOffers = async (offset) => {
    try {
      const res = await fetch("http://localhost:9000/getOffers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ offset }),
      });
      const body = await res.json();
      setOffers([...offers, ...body.result.offers]);
      setTotalOffers(body.result.total_offers);
    } catch (e) {
      console.log("fetch error", e);
    }
  };

  const runSearch = async (offset, term) => {
    try {
      const res = await fetch("http://localhost:9000/runSearch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ offset, term }),
      });

      const body = await res.json();
      if (body.result.offers) {
        setOffers(body.result.offers);
        setTotalOffers(body.result.offers.length);
      } else {
        setOffers([]);
      }
    } catch (e) {
      console.log("fetch error", e);
    }
  };

  const throttleSearch = _.debounce((term) => {
    runSearch(1, term);
  }, 300);

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <div className="container">
      <Header />
      <Search onTermSubmit={throttleSearch} />
      <Content
        offers={offers}
        totalOffers={totalOffers}
        getOffers={getOffers}
      />
      <Footer totalOffers={totalOffers} />
    </div>
  );
};

export default App;
