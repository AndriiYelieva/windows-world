import "./ServiceArea.scss";
import serviceArea from "../../../../images/service-area.png"
import window from "../../../../images/window.png"
import { HaveAQuestion } from "../../../../components";

export const ServiceArea = () => {
  return (
    <section className="serviceArea">
      <h1 className="serviceArea__title">Service rea</h1>
      <div className="serviceArea__wrapper">
        <div className="serviceArea__description">
          <img
            src={window}
            alt="window"
            className="serviceArea__description--window"
          />
          <div className="serviceArea__description--text">
            <h2 className="serviceArea__description--title">
              NEED PROJECT HELP?
            </h2>
            <p className="serviceArea__description--account">
              Tell us about your project and we'll connect you with a professional.
            </p>
            <button
              className="serviceArea__description--link"
              type="button"
            >
              CONNECT WITH US
            </button>
          </div>
        </div>

        <img
          src={serviceArea}
          alt="about-us"
          className="serviceArea__photo"
        />
      </div>

      <HaveAQuestion />
    </section>
  );
};