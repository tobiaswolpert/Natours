import React from "react";
import "./header.css";
import logo from "../img/logo-white.png";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="logo-box">
          <img src={logo} alt="White logo" className="logo"></img>
        </div>

        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Outdoors</span>
            <span className="heading-primary-sub">is where life happens</span>
          </h1>
          <a href="#" className="btn btn-white btn-animated">
            Discover our tours
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
