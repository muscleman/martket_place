import React from "react";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <a href="#">
        <img src={logo} className="logo-img" alt="Zano logo" />
      </a>
      <span className="logo">Zano Marketplace Template</span>
      <a href="#" className="btn-primary">
        Submit New Offer
      </a>
    </div>
  );
};

export default Header;
