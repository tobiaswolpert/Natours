import React from "react";
import nat_8 from "../../img/nat-8.jpg";
import nat_9 from "../../img/nat-9.jpg";

const Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={nat_8} alt="Tour Pic" className="popup__img" />
          <img src={nat_9} alt="Tour Pic" className="popup__img" />
        </div>
        <div className="popup__right">
          <a className="popup__close" href="#section-tours">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start Booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nam
            mollitia nihil, consectetur repellendus dicta deserunt odit sint
            aliquam molestias reprehenderit quasi adipisci illum atque dolorum,
            culpa, pariatur debitis accusantium. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Qui repellendus temporibus maxime
            molestias consequuntur porro cumque non, officia corrupti sed,
            voluptatum, voluptatem vel beatae ad facilis fuga obcaecati illo
            ducimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minima aut saepe, asperiores et officiis quos aliquid impedit
            laboriosam iure fugit hic, omnis suscipit quas explicabo delectus
            incidunt modi. Est, dolores!
          </p>
          <a href="#" className="btn btn--green">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
