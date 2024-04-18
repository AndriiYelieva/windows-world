import React from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import "./Navigation.scss"
import { navigation, networks } from "../../config";

export const Nav = () => {

  return (
    <nav className="navigation">
      <ul className="navigation__networks">
        {networks.map(link => (
          <Link
            to={link.href}
            className={`navigation__networks--link navigation__networks--${link.title}`}
            key={link.id}
          />
        ))}
      </ul>

      {navigation.map(link => (
        <Link
          to={link.href}
          className={classNames("navigation__link", {
            "navigation__link--logo": link.title === "logo",
          })}
          key={link.id}
        >
          {link.title === "logo" ? "" : link.title}
        </Link>
      ))}

      <button
        className="navigation__order"
        type="button"
      >
        My Order
      </button>
    </nav>
  );
};