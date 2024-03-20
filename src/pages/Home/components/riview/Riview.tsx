import React from 'react';
import { RiviewType } from '../../../../types';
import "./Riview.scss";

type Props = {
  riview: RiviewType,
};

export const Riview: React.FC<Props> = ({ riview }) => {
  const activeStars = Math.min(riview.rating, 5);

  return (
    <li className="riview" key={riview.id}>

      <div className="riview__wrapper">
        <h1 className="riview__title">
          {riview.title}
        </h1>
        <div className="riview__stars">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`riview__star ${index < activeStars ? 'riview__star--active' : ''}`}
            />
          ))}
        </div>
      </div>
      <p className="riview__description">
        {riview.description}
      </p>

    </li>
  );
};