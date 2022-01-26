import React, { useContext } from "react";
import { Store } from "../store/store-reducer";
import logo from "../img/zano_mp_logo.png";

import { updateSearchKeyword, newOfferPopup } from "../store/actions";

const Header = () => {
  const { state, dispatch } = useContext(Store);

  const onInputChange = (e) => {
    updateSearchKeyword(dispatch, e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const openPopup = () => {
    state.newOfferPopup
      ? newOfferPopup(dispatch, false)
      : newOfferPopup(dispatch, true);
  };

  return (
    <div className="header-container">
      <a href="/">
        <img src={logo} className="logo-img" alt="Zano logo" />
      </a>
      <form
        className="search-form"
        onSubmit={onFormSubmit}
        onClick={state.newOfferPopup ? () => openPopup() : undefined}
      >
        {/* <SearchIcon/> */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="search-icon"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#BDCCE3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21L16.65 16.65"
            stroke="#BDCCE3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input
          id="search"
          type="search"
          placeholder="Search..."
          value={state.keyword}
          onChange={onInputChange}
        />
      </form>
      <button onClick={() => openPopup()} className="btn-primary">
        {state.newOfferPopup ? "Go Back" : "Submit New Offer"}
      </button>
    </div>
  );
};

export default Header;
