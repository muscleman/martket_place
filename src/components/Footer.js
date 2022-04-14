import React, { useContext } from "react";
import { Store } from "../store/store-reducer";

const Footer = () => {
  const { state } = useContext(Store);

  return (
    <footer className="footer-container">
      <nav className="chain-data">
        <p>
          <strong>{ state.offers.totalOffers }</strong> offers uploaded on chain
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
