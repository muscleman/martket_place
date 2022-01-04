import React, { useState } from "react";
import tshirt from "../img/Tshirt-design.jpg";

const Content = ({ offers, totalOffers, getOffers }) => {
  const [offset, setOffset] = useState(100);

  if (offers?.length) {
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
        {/* <div className="load-more">
          {totalOffers > offers.length && (
            <p
              onClick={() => {
                getOffers(offset);
                setOffset(offset + 100);
              }}
            >
              Load more...
            </p>
          )}
        </div> */}
      </div>
    );
  } else {
    return <div className="content-container">No offers available</div>;
  }
};

export default Content;
