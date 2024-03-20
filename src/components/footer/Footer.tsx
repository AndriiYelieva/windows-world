import { Link } from "react-router-dom";
import { navigation } from "../../config";
import "./Footer.scss";
import { footerCompanyLinks, footerSupportLinks, footerWindowLinks, networks } from "../../config/config";

export const Footer = () => {
  return (
    <footer className="footer" id="contact-us">
      <h1 className="footer__title">
        GET HELP ON YOUR PROJECT
      </h1>

      <nav className="footer__navigation">
        {navigation.map(link => (
          <Link
            to={link.href}
            className="footer__navigation--link"
            key={link.id}
          >
            {link.title}
          </Link>
        ))}
      </nav>

      <ul className="footer__list">
        <ul className="footer__list--links">
          {footerWindowLinks.map(item => (
            item.href !== null ?
              <Link
                className="footer__list--link"
                key={item.id}
                to={item.href}
              >
                {item.title}
              </Link>
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
              <Link
                className="footer__list--link"
                key={item.id}
                to={item.href}
              >
                {item.title}
              </Link>
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
              <Link
                className="footer__list--link"
                key={item.id}
                to={item.href}
              >
                {item.title}
              </Link>
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