import "./Advantages.scss";
import advantages from "../../../../images/photos/advantages.png"
import { Link } from "react-router-dom";

export const Advantages = () => {
  return (
    <section className="advantages" id="advantages">
      <img src={advantages} alt="advantages" className="advantages__photo" />
      <div className="advantages__description">
        <h1 className="advantages__description--title">
          Advantages
        </h1>
        <p className="advantages__description--account">
          With a passion for innovation, we use cutting-edge technologies and advanced engineering solutions to enhance your quality of life and living space.
        </p>
        <div className="advantages__description--links">
          <Link
            to='/windows-world/services'
            className="advantages__description--link advantages__description--windows"
          >
            Windows
          </Link>
          <Link
            to='/windows-world/services'
            className="advantages__description--link advantages__description--doors"
          >
            Doors
          </Link>
        </div>
      </div>
    </section>
  );
};