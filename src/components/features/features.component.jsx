import React from "react";

const Features = () => {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <ion-icon name="globe-outline"></ion-icon>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Explore the World
            </h3>
            <p className="feature-box__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              esse ipsa adipisci dolor eius a et magnam illo.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <ion-icon name="compass-outline"></ion-icon>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Meet Nature
            </h3>
            <p className="feature-box__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              esse ipsa adipisci dolor eius a et magnam illo.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <ion-icon name="map-outline"></ion-icon>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Find your way
            </h3>
            <p className="feature-box__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              esse ipsa adipisci dolor eius a et magnam illo.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <ion-icon name="heart-outline"></ion-icon>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live a healthier life
            </h3>
            <p className="feature-box__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              esse ipsa adipisci dolor eius a et magnam illo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
