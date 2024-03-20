import "./AboutUs.scss";
import about from "../../../../images/about-us.png"

export const AboutUs = () => {
  return (
    <section className="about" id="#about-us">
      <h1 className="about__title">About us</h1>
      <div className="about__wrapper">
        <div className="about__description">
          <h2 className="about__description--title">
            Windows World
          </h2>
          <p className="about__description--account">
            High quality, innovative bifold, accordion, multi slide, swing and sliding doors and windows.
          </p>
          <button
            className="about__description--link"
            type="button"
          >
            LEARN MORE ABOUT US
          </button>
        </div>

        <img
          src={about}
          alt="about-us"
          className="about__photo"
        />
      </div>
    </section>
  );
};