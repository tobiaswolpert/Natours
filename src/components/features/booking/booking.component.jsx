import React from "react";

const Booking = () => {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form className="form" action="#">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Start booking now</h2>
              </div>
              <div className="form__group">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Full Name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>

              <div className="form__group">
                <input
                  className="form__input"
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Full Name
                </label>
              </div>

              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="size"
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Small Tour Group
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="size"
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Large Tour Group
                  </label>
                </div>
              </div>

              <div className="form__group">
                <button className="btn btn--green">Next Step &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
