import React from 'react'
import { windowsService } from '../../../../config';
import './Windows.scss';

export const Windows = () => {
  return (
    <header className="windows">
      <div className="windows__title">
        <h3 className="windows__title--designs">
          TIMELESS DESIGNS IN ON-TREND COLORS
        </h3>
        <p className="windows__title--style">
          Our wood windows and patio doors are now available in new interior colors to complement your unique home style.
        </p>
      </div>

      <ul className="windows__list">
        {windowsService.map(card => (
          <li key={card.id} className="windows__card">
            <img
              src={card.image}
              alt={card.title}
              className="windows__card--image"
            />
            <button
              type="button"
              className={`windows__card--link windows__card--${card.title}`}
            />
          </li>
        ))}
      </ul>

      <button className="windows__link">
        View All Styles and colors
      </button>
    </header>
  );
}
