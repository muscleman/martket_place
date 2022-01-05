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
              src={offer.url ? offer.url : tshirt}
              alt="Marketplace offer pic"
            />
            <div className="offer-content">
              <h3 className="offer-title">{offer.t}</h3>
              <p className="offer-categories">{offer.cat}</p>
              <p className="offer-price">{offer.ap}&nbsp;ZANO</p>
              <p className="offer-description">
                {offer.do
                  ? offer.do
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              </p>

              <p className="offer-contact">{offer.cnt}</p>
              <p className="offer-comments">{offer.com}</p>
              <p className="offer-expiration">*Expires in 2 days</p>
            </div>

            {/* <div className="offer-buttons">
              <a href="#" className="btn-primary">
                Respond
              </a>
            </div> */}
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
