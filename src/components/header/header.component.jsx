import React from "react";
import logo from "../../img/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="White logo" className="header__logo"></img>
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <a href="#" className="btn btn--white btn--animated">
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
