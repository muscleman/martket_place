import React from "react";
import logo from "../img/logo.png";

const Content = () => {
  return (
    <div className="content-container">
      <div className="offer-card">
        <img className="offer-img" src={logo} />
        <div className="offer-content">
          <h3 className="offer-title">Offer title</h3>
          <p className="offer-description">Offer description</p>
          <p className="offer-categories">Offer categories</p>
          <p className="offer-price">300 $ZANO</p>
        </div>
        <div className="offer-buttons">
          <a href="#" className="btn-primary">
            Respond
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
