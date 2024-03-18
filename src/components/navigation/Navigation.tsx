import { Link, NavLink } from "react-router-dom";
import "./Navigation.scss"
import classNames from "classnames";

const nav = [
  {
    id: 1,
    title: "Home page",
    href: 'home',
  },
  {
    id: 2,
    title: "About us",
    href: 'about-us',
  },
  {
    id: 3,
    title: "Advantages",
    href: 'advantages',
  },
  {
    id: 4,
    title: "Services",
    href: 'services',
  },
  {
    id: 5,
    title: "Our work",
    href: 'our-work',
  },
  {
    id: 6,
    title: "Reviews",
    href: 'reviews',
  },
  {
    id: 7,
    title: "Service area",
    href: 'service-area',
  },
  {
    id: 8,
    title: "Contact us",
    href: 'contact-us',
  },
]

export const Nav = () => {
  return (
    <div className="nav">
      <div
        className="logo">
        <Link
          to="/windows-world"
          className="logo__link"
        />
        <div className="logo__wrapper">
          <h1 className="logo__wrapper--title">Windows World</h1>
          <p className="logo__wrapper--text">Windows & doors</p>
        </div>
      </div>

      <nav className="navigation">
        {nav.map(link => (
          <NavLink
            to={link.href}
            className={({ isActive }) =>
              classNames("navigation__link", {
                "navigation__link--active": isActive,
              })
            }
            key={link.id}
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};