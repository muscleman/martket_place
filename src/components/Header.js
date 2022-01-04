import React from "react";
import logo from "../img/logo.png";

const Header = ({ isOpen, openPopup }) => {
  return (
    <div className="header-container">
      <a href="/">
        <img src={logo} className="logo-img" alt="Zano logo" />
      </a>
      <span className="logo">Zano Marketplace Template</span>
      <a href="#" onClick={openPopup} className="btn-primary">
        {isOpen ? "Back" : "Submit New Offer"}
      </a>
    </div>
  );
};

export default Header;
