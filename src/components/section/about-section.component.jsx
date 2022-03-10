import React from "react";
import nat_1_large from "../../img/nat-1-large.jpg";
import nat_2_large from "../../img/nat-2-large.jpg";
import nat_3_large from "../../img/nat-3-large.jpg";

const Section = () => {
  return (
    <div className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            nostrum esse adipisci sapiente perspiciatis odio nihil, fuga maiores
            accusamus earum nulla ipsum doloribus veritatis laborum
            reprehenderit dignissimos tempora blanditiis cum.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have beforee
          </h3>
          <p className="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum esse
            ipsa adipisci dolor eius a et magnam illo, labore modi incidunt
            consectetur nihil inventore, deleniti mollitia numquam illum nostrum
            accusantium!
          </p>

          <a href="##" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              className="composition__photo composition__photo--p1"
              src={nat_1_large}
              alt="Bild 1"
            />
            <img
              className="composition__photo composition__photo--p2"
              src={nat_2_large}
              alt="Bild 2"
            />
            <img
              className="composition__photo composition__photo--p3"
              src={nat_3_large}
              alt="Bild 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
