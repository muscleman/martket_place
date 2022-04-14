import React, { useContext } from "react";
import { Store } from "../store/store-reducer";
import logo from "../assets/images/zano_mp_logo.png";
import user from "../assets/icons/user.svg";

import { updateSearchKeyword, newOfferPage, myOffersPage } from "../store/actions";

const Header = () => {
  const { state, dispatch } = useContext(Store);

  const onInput = ({ target: { value } }) => updateSearchKeyword(dispatch, value);

  return (
    <header className="header">
      <div className="row">
        <a href="/">
          <img src={ logo } className="logo-img" alt="Zano logo"/>
        </a>

        <form
          className="search-form"
          onSubmit={ (e) => e.preventDefault() }
          onClick={ () => {
            newOfferPage(dispatch, false);
            myOffersPage(dispatch, false);
          } }>
          <div className="form__wrap">
            <div className="form__field">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="search-icon "
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
                onChange={ onInput }
              />
            </div>
          </div>
        </form>

        <button onClick={ () => myOffersPage(dispatch, !state.myOffersPage) } className="btn-primary user">
          <span><img src={user} alt="user"/></span>
        </button>

        <button onClick={ () => newOfferPage(dispatch, !state.newOfferPage) } className="btn-primary new-offer">
          <span>{ state.newOfferPage ? "Go Back" : "Submit New Offer" }</span>
        </button>
      </div>

    </header>
  );
};

export default Header;
