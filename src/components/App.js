import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Filters from "./Filters";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  const [totalOffers, setTotalOffers] = useState(0);
  const [offers, setOffers] = useState([]);

  const getTotalOffers = async () => {
    try {
      const res = await fetch("http://localhost:9000/totalOffers");
      const body = await res.json();
      setTotalOffers(body.result.total_offers);
    } catch (e) {
      console.log("fetch error", e);
    }
  };

  const getOffers = async () => {
    try {
      const res = await fetch("http://localhost:9000/getOffers");
      const body = await res.json();
      setOffers(body.result.offers);
    } catch (e) {
      console.log("fetch error", e);
    }
  };

  useEffect(() => {
    getTotalOffers();
    getOffers();
  }, []);

  return (
    <div className="container">
      <Header />
      <Search />
      <Content offers={offers} />
      <Footer totalOffers={totalOffers} />
    </div>
  );
};

export default App;
