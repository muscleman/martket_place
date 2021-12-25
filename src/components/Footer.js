import React from "react";

const Footer = ({ totalOffers }) => {
  return (
    <div className="footer-container">
      <nav className="chain-data">
        <p>
          <strong>{totalOffers}</strong> offers available on chain
        </p>
      </nav>
    </div>
  );
};

export default Footer;
