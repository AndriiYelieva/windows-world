import { Link, NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import "./Navigation.scss"
import { navigation, scrollToTop } from "../../config";

export const Nav = () => {
  const location = useLocation();

  const isService = location.pathname === "/windows-world/services";

  return (
    <div className="nav">
      <div className="logo">
        <Link
          to="/windows-world"
          className="logo__link"
          onClick={scrollToTop}
        />
        <div className="logo__wrapper">
          <h1
            className={classNames("logo__wrapper--title", {
              "logo__wrapper--service": isService,
            })}
          >Windows World</h1>
          <p
            className={classNames("logo__wrapper--text", {
              "logo__wrapper--service": isService,
            })}
          >Windows & doors</p>
        </div>
      </div>

      <nav className="navigation">
        {navigation.map(link => (
          link.isLocation === true
            ? <NavLink
              to={link.href}
              className={({ isActive }) =>
                classNames("navigation__link", {
                  "navigation__link--active": isActive,
                })
              }
            >
              {link.title}
            </NavLink>
              : <a
                href={link.href}
                className={
                  classNames("navigation__link", {
                    "navigation__link--active": false,
                  })
                }
                key={link.id}
              >
                {link.title}
              </a>
        ))}
      </nav>
    </div>
  );
};