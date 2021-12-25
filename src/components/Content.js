import React from "react";
import logo from "../img/logo.png";
import tshirt from "../img/Tshirt-design.jpg";

const Content = ({ offers }) => {
  console.log(offers);
  if (offers.length) {
    return (
      <div className="content-container">
        {offers.map((offer) => (
          <div key={offer.tx_hash} className="offer-card">
            <img
              className="offer-img"
              src={tshirt}
              alt="Marketplace offer pic"
            />
            <div className="offer-content">
              <h3 className="offer-title">{offer.t}</h3>
              <p className="offer-categories">{offer.cat}</p>
              <p className="offer-price">
                <strong>{offer.ap}</strong> $ZANO
              </p>
              <p className="offer-description">{offer.com}</p>

              <p className="offer-contact">{offer.cnt}</p>
            </div>

            <div className="offer-buttons">
              <a href="#" className="btn-primary">
                Respond
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <div className="content-container">No offers found</div>;
  }
};

export default Content;
