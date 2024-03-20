import { Link } from "react-router-dom";
import { ourWorks } from "../../../../config";
import "./OurWork.scss";

export const OurWork = () => {
  return (
    <section className="work">
      <h1 className="work__title">
        Our Work
      </h1>

      <ul className="work__cards">
        {ourWorks.map(card => (
          <li className="work__card" key={card.id}>
            <img
              src={card.image}
              alt={card.title}
              className="work__card--image"
            />
            <h1 className="work__card--title">
              {card.title}
            </h1>
            <p className="work__card--description">
              {card.description}
            </p>
            <Link
              to={card.href}
              className="work__card--link"
            >
              {card.link}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};