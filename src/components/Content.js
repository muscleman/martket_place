import React, { useContext } from "react";
import noPhoto from "../assets/images/no_photo.png";
import infoIcon from "../assets/icons/info.svg";
import { Store } from "../store/store-reducer";
import Masonry from 'react-masonry-css';

const breakpoints = {
  default: 4,
  1300: 3,
  1000: 2,
  760: 1
};

const calcExpDate = (offerTimestamp) => {
  const date =
    10 - (Date.now() - offerTimestamp * 1000) / (1000 * 60 * 60 * 24);
  return Math.trunc(date);
};

const templateCard = (offer) => {
  return (
    <div key={ offer.tx_hash } className="offer-card with_hover">
      { offer.com && <div className="info">
        <button className="info-button tooltip">
          <img className="info-icon" src={ infoIcon } alt="info"/>
          <div className="menu">
            <p className="inform-text">{ offer.com }</p>
          </div>
        </button>
      </div> }
      <div className="content">
        <div className="top-block">
          <img className="img pointer" src={ offer.url || noPhoto } alt={ offer.t }/>
          <div className="row">
            <div className="col">
              <h3 className="title">{ offer.t }</h3>
              <p className="categories">{ offer.cat }</p>
            </div>
            <div className="col">
              <div className="expiration">
                <label>Expires in</label>
                <p>
                  { calcExpDate(offer.timestamp) } days
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className="bottom-block">
          <p className="description">
            { offer.do ? offer.do : "No description provided" }
          </p>
          <div className="row">
            <div className="col">
              <div className="price">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.144 18H3.6C1.6128 18 0 16.3872 0 14.4V8.856C0 6.8724 1.6128 5.256 3.6 5.256H5.292V3.6C5.292 1.6128 6.9048 0 8.892 0H14.4C16.3836 0 18 1.6128 18 3.6V9.108C18 11.0916 16.3872 12.708 14.4 12.708H6.5232C6.0588 12.708 5.6448 12.4308 5.4684 12.0024C5.292 11.574 5.3892 11.0844 5.7168 10.7568L9.0612 7.4124H3.6C2.808 7.4124 2.16 8.0568 2.16 8.8524V14.4C2.16 15.192 2.8044 15.84 3.6 15.84H9.144C9.936 15.84 10.584 15.1956 10.584 14.4V12.708H12.744V14.4C12.744 16.3872 11.1312 18 9.144 18ZM8.9784 10.548H14.4C15.192 10.548 15.84 9.9036 15.84 9.108V3.6C15.84 2.808 15.1956 2.16 14.4 2.16H8.892C8.1 2.16 7.452 2.8044 7.452 3.6V5.256H11.5128C11.9772 5.256 12.3912 5.5332 12.5676 5.9616C12.744 6.39 12.6468 6.8796 12.3192 7.2072L8.9784 10.548Z"
                    fill="#0D0C3A" fillOpacity="0.6"/>
                </svg>
                <span>{ offer.ap }&nbsp;ZANO</span>
              </div>
            </div>

            <div className="col">
              <p className="contact">@{ offer.cnt }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const Content = () => {
  const { state } = useContext(Store);

  const renderCards = () => {
    const { offers: { offersList }, pagination: { limit, offset } } = state;
    const cards = offersList.slice(offset, offset + limit).map(templateCard);
    return <div>
      {
        state.myOffersPage
        &&
        <div className="info-block">
          <h3>My offers <span className="count">8</span></h3>
        </div>
      }
      <Masonry breakpointCols={ breakpoints }
               className="my-masonry-grid"
               columnClassName="my-masonry-grid_column">{ cards }
      </Masonry>
    </div>;
  };

  const renderNoOffers = () => {
    return (
      <div className="info-block">
        <h3>No offers</h3>
        <p>You don't have offers.</p>
      </div>
    );
  };

  const renderNotFound = () => {
    return (
      <div className="info-block">
        <h3>No results found</h3>
        <p>Your search for <span>«{ state.keyword }»</span> did not match anything.<br/>
          Try to change your search phrase.</p>
      </div>
    );
  };

  const renderLoading = () => {
    return (
      <div className="info-block">
        <p>Loading offers, please wait...</p>
      </div>
    );
  };

  return state.message.type === "loading"
    ? renderLoading()
    : state.offers.totalOffers
      ? renderCards()
      : state.keyword
        ? renderNotFound()
        : renderNoOffers();
};

export default Content;
