import React from "react";
import nat_8 from "../../img/nat-8.jpg";
import nat_9 from "../../img/nat-9.jpg";
import video_mp4 from "../../img/video.mp4";
import video_webm from "../../img/video.webm";

const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video_mp4} type="video/mp4" />
          <source src={video_webm} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinly happy</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img className="story__image" src={nat_8} alt="Person on a tour" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week with my family
            </h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quia
              possimus laudantium harum impedit quo, provident praesentium
              asperiores officia obcaecati nobis quod voluptatem unde, eius
              architecto quidem! Eveniet, quia dolore. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Neque facere accusamus, minima
              laboriosam eaque quidem minus eum dolor consectetur saepe eveniet
              excepturi eius sequi repellendus necessitatibus corporis aliquid
              ad similique?
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img className="story__image" src={nat_9} alt="Person on a tour" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Wow! My life is completely different now!
            </h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quia
              possimus laudantium harum impedit quo, provident praesentium
              asperiores officia obcaecati nobis quod voluptatem unde, eius
              architecto quidem! Eveniet, quia dolore. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Neque facere accusamus, minima
              laboriosam eaque quidem minus eum dolor consectetur saepe eveniet
              excepturi eius sequi repellendus necessitatibus corporis aliquid
              ad similique?
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default Stories;
