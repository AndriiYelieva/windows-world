import React from 'react';
import "./Footer.scss";
import { footerAboutLinks, footerInfoLinks, footerServiceLinks, networks } from "../../config/config";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <Link
        to="/windows-world/"
        className="footer__logo">
      </Link>

      <div className="footer__links">
        <div className="footer__links--list">
          <h1 className="footer__links--title">
            About
          </h1>

          <ul className="footer__links--list">
            {footerAboutLinks.map(item =>
              <Link
                to={item.href}
                key={item.id}
                className="footer__links--item"
              >
                {item.title}
              </Link>
            )}
          </ul>
        </div>
        <div className="footer__links--list">
          <h1 className="footer__links--title">
            Service
          </h1>

          <ul className="footer__links--list">
            {footerServiceLinks.map(item =>
              <Link
                to={item.href}
                key={item.id}
                className="footer__links--item"
              >
                {item.title}
              </Link>
            )}
          </ul>
        </div>
        <div className="footer__links--list">
          <h1 className="footer__links--title">
            Info
          </h1>

          <ul className="footer__links--list">
            {footerInfoLinks.map(item =>
              <Link
                to={item.href}
                key={item.id}
                className="footer__links--item"
              >
                {item.title}
              </Link>
            )}
          </ul>
        </div>
        <div className="footer__links--list">
          <h1 className="footer__links--title">
            Follow
          </h1>

          <ul className="footer__networks">
            {networks.map(link =>
              <Link
                to={link.href}
                key={link.id}
                className={`footer__networks--link footer__networks--${link.title}`}
              />
            )}
          </ul>
        </div>
      </div>

      <div className="footer__container">
        <p className="footer__title">
          Copyright Online MTC Home Kitchens 2018 - All rights reserved. Responsive website design, Development & Hosting by mtc.
        </p>
      </div>

    </footer>
  )
}