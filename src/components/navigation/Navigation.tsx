import { Link } from "react-router-dom";
import classNames from "classnames";
import "./Navigation.scss"
import { navigation } from "../../config";

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
        {navigation.map(link => (
          // <a
          //   href={link.href}
          //   className="navigation__link"
          //   key={link.id}
          // >
          //   {link.title}
          // </a>
          <Link
            to={link.href}
            className={
              classNames("navigation__link", {
                "navigation__link--active": false,
              })
            }
            key={link.id}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};