import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import "./Navigation.scss";
import { navigation, scrollToTop } from "../../config";

export const Nav = () => {
  const location = useLocation();

  const isService = location.pathname === "/windows-world/services";

  const [scrollTargetId, setScrollTargetId] = useState(null);

  const handleLinkClick = (link: { id?: number; title?: string; href: any; isLocation: any; }) => {
    if (isService && link.isLocation) {
      window.location.href = link.href; // Перехід на іншу сторінку
      setScrollTargetId(link.href.substring(1)); // Встановлення id цільового елемента для прокрутки
    }
  };

  // Прокрутка до цільового елемента при оновленні scrollTargetId
  React.useEffect(() => {
    if (scrollTargetId) {
      const element = document.getElementById(scrollTargetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setScrollTargetId(null); // Скидання scrollTargetId після прокрутки
      }
    }
  }, [scrollTargetId]);

  return (
    <div className="nav">
      <div className="logo">
        <Link to="/windows-world" className="logo__link" onClick={scrollToTop} />
        <div className="logo__wrapper">
          <h1
            className={classNames("logo__wrapper--title", {
              "logo__wrapper--service": isService,
            })}
          >
            Windows World
          </h1>
          <p
            className={classNames("logo__wrapper--text", {
              "logo__wrapper--service": isService,
            })}
          >
            Windows & doors
          </p>
        </div>
      </div>

      <nav className="navigation">
        {navigation.map((link) =>
          link.isLocation === true ? (
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
          ) : (
            <a
              href={link.href}
              className={classNames("navigation__link", {
                "navigation__link--active": false,
              })}
              key={link.id}
              onClick={() => handleLinkClick(link)}
            >
              {link.title}
            </a>
          )
        )}
      </nav>
    </div>
  );
};
