import React, { useState } from "react";
import logo from "../img/zano_mp_logo.png";
import { ReactComponent as SearchIcon } from "../img/icons/search.svg";

const Header = ({ isOpen, openPopup, onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
    onFormSubmit(e);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className="header-container">
      <a href="/">
        <img src={logo} className="logo-img" alt="Zano logo" />
      </a>
      <form
        className="search-form"
        onSubmit={onFormSubmit}
        onClick={isOpen && openPopup}
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 21L16.65 16.65"
            stroke="#BDCCE3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <input
          id="search"
          type="search"
          placeholder="Search..."
          value={term}
          onChange={onInputChange}
        />
      </form>
      <button onClick={openPopup} className="btn-primary">
        {isOpen ? "Go Back" : "Submit New Offer"}
      </button>
    </div>
  );
};

export default Header;
