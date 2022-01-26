import React, { useContext } from "react";
import { Store } from "../store/store-reducer";

const Footer = () => {
  const { state } = useContext(Store);

  return (
    <div className="footer-container">
      <nav className="chain-data">
        <p>
          <strong>{state.offers.totalOffers}</strong> offers available on chain
        </p>
      </nav>
    </div>
  );
};

export default Footer;
