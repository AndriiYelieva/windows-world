import { Link } from "react-router-dom";
import { navigation, scrollToTop } from "../../config";
import "./Footer.scss";
import { footerCompanyLinks, footerSupportLinks, footerWindowLinks, networks } from "../../config/config";
import classNames from "classnames";

export const Footer = () => {
  return (
    <footer className="footer" id="contact-us">
      <h1 className="footer__title">
        GET HELP ON YOUR PROJECT
      </h1>

      <nav className="footer__navigation">
        {navigation.map(link => (
          link.isLocation === true
            ? <Link
              to={link.href}
              className="navigation__link"
              onClick={scrollToTop}
            >
              {link.title}
            </Link>
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

      <ul className="footer__list">
        <ul className="footer__list--links">
          {footerWindowLinks.map(item => (
            item.href !== null ?
              <button
                className="footer__list--link"
                key={item.id}
              >
                {item.title}
              </button>
              : <li
                className="footer__list--item"
                key={item.id}
              >
                {item.title}
              </li>
          ))}
        </ul>
        <ul className="footer__list--links">
          {footerCompanyLinks.map(item => (
            item.href !== null ?
              <button
                className="footer__list--link"
                key={item.id}
              >
                {item.title}
              </button>
              : <li
                className="footer__list--item"
                key={item.id}
              >
                {item.title}
              </li>
          ))}
        </ul>
        <ul className="footer__list--links">
          {footerSupportLinks.map(item => (
            item.href !== null ?
              <button
                className="footer__list--link"
                key={item.id}
              >
                {item.title}
              </button>
              : <li
                className="footer__list--item"
                key={item.id}
              >
                {item.title}
              </li>
          ))}
        </ul>
      </ul>

      <ul className="footer__networks">
        {networks.map(link => (
          <Link
            to={link.href}
            className={`footer__networks--link footer__networks--${link.title}`}
            key={link.id}
          />
        )
        )}
      </ul>
    </footer>
  )
}