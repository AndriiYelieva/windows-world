import React from 'react'
import { doors } from '../../../../config';
import './Doors.scss';

export const Doors = () => {
  return (
    <header className="doors">
      <ul className="doors__list">
        {doors.map(card => (
          <li key={card.id} className="doors__card">
            <img
              src={card.image}
              alt={card.title}
              className="doors__card--image"
            />
            <button
              type="button"
              className="doors__card--link"
            >
              {card.title}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
