import "./OurWork.scss";
import marketExperience from "../../../../images/market-experience.png";
import aboutTheGuarantee from "../../../../images/about-the-guarantee.png";
import wereToBuy from "../../../../images/were-to-buy.png";
import { Link } from "react-router-dom";

const arrayWork = [
  {
    id: 1,
    title: "Market experience",
    description: "Outstanding performance backed by a 10-Year Limited Warranty.",
    link: "learn more",
    href: "",
    image: marketExperience,
  },
  {
    id: 2,
    title: "About the guarantee",
    description: "We provide excellent quality and a multi-year warranty.",
    link: "learn more",
    href: "",
    image: aboutTheGuarantee,
  },
  {
    id: 3,
    title: "Were to buy",
    description: "Use the map to find a store near you.",
    link: "Search",
    href: "",
    image: wereToBuy,
  },
]

export const OurWork = () => {
  return (
    <section className="work">
      <h1 className="work__title">
        Our Work
      </h1>

      <ul className="work__cards">
        {arrayWork.map(card => (
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