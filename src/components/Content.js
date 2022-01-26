import React, { useContext } from "react";
import noPhoto from "../img/no_photo.png";
import { Store } from "../store/store-reducer";

const Content = () => {
  const { state } = useContext(Store);

  const calcExpDate = (offerTimestamp) => {
    const date =
      10 - (Date.now() - offerTimestamp * 1000) / (1000 * 60 * 60 * 24);
    return Math.trunc(date);
  };

  const renderCards = () => {
    const markup = state.offers.offersList.map((offer) => (
      <div key={offer.tx_hash} className="offer-card">
        <div className="offer-header">
          <img
            className="offer-img"
            src={offer.url ? offer.url : noPhoto}
            alt={offer.t}
          />
          <h3 className="offer-title">{offer.t}</h3>
          <p className="offer-categories">{offer.cat}</p>
          <div className="offer-expiration">
            <p>Expires in</p>
            <p>
              <strong>{calcExpDate(offer.timestamp)} days</strong>
            </p>
          </div>
        </div>
        <div className="offer-content">
          <p className="offer-description">
            {offer.do ? offer.do : "No description provided"}
          </p>

          <div className="offer-bottom">
            <div className="offer-price">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.144 18H3.6C1.6128 18 0 16.3872 0 14.4V8.856C0 6.8724 1.6128 5.256 3.6 5.256H5.292V3.6C5.292 1.6128 6.9048 0 8.892 0H14.4C16.3836 0 18 1.6128 18 3.6V9.108C18 11.0916 16.3872 12.708 14.4 12.708H6.5232C6.0588 12.708 5.6448 12.4308 5.4684 12.0024C5.292 11.574 5.3892 11.0844 5.7168 10.7568L9.0612 7.4124H3.6C2.808 7.4124 2.16 8.0568 2.16 8.8524V14.4C2.16 15.192 2.8044 15.84 3.6 15.84H9.144C9.936 15.84 10.584 15.1956 10.584 14.4V12.708H12.744V14.4C12.744 16.3872 11.1312 18 9.144 18ZM8.9784 10.548H14.4C15.192 10.548 15.84 9.9036 15.84 9.108V3.6C15.84 2.808 15.1956 2.16 14.4 2.16H8.892C8.1 2.16 7.452 2.8044 7.452 3.6V5.256H11.5128C11.9772 5.256 12.3912 5.5332 12.5676 5.9616C12.744 6.39 12.6468 6.8796 12.3192 7.2072L8.9784 10.548Z"
                  fill="#0D0C3A"
                  fillOpacity="0.6"
                />
              </svg>
              <span>{offer.ap}&nbsp;ZANO</span>
            </div>

            <p className="offer-contact">{offer.cnt}</p>
          </div>
          <p className="offer-comments">
            {offer.com ? offer.com : "No additional comments provided"}
          </p>
        </div>
      </div>
    ));
    return <div className="content-container">{markup}</div>;
  };

  const renderNotFound = () => {
    return (
      <div className="not-found-container">
        <h1>No Offers Found</h1>
        <p>Nothing matched your search query, please try again!</p>
      </div>
    );
  };

  const renderLoading = () => {
    return (
      <div className="not-found-container">
        <p>Loading offers, please wait...</p>
      </div>
    );
  };

  return state.loading
    ? renderLoading()
    : state.offers.offersList
    ? renderCards()
    : renderNotFound();
};

export default Content;
