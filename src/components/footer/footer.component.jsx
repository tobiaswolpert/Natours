import React from "react";
import logo_2 from "../../img/logo-green-2x.png";
import logo_1 from "../../img/logo-green-1x.png";
import logo_sm_1 from "../../img/logo-green-small-1x.png";
import logo_sm_2 from "../../img/logo-green-small-2x.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet={`${logo_sm_1} 1x, ${logo_sm_2} 2x`}
            media="(max-width: 37.5em)"
          ></source>

          <img
            srcSet={`${logo_1} 1x, ${logo_2} 2x`}
            alt="Logo Footer"
            src={logo_2}
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>

              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact Us
                </a>
              </li>

              <li className="footer__item">
                <a href="#" className="footer__link">
                  Careers
                </a>
              </li>

              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>

              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-1-of-2">
          <p className="footer__copyright">Built by Tobias Wolpert</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
