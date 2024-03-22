import React from 'react'
import { ReviewType } from '../../../../types';
import "./Review.scss";

type Props = {
  review: ReviewType,
};

export const Review: React.FC<Props> = ({ review }) => {
  const activeStars = Math.min(review.rating, 5);

  return (
    <li className="review" key={review.id}>
      <div className="review__wrapper">
        <h1 className="review__title">
          {review.title}
        </h1>
        <div className="review__stars">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`review__star ${index < activeStars ? 'review__star--active' : ''}`}
            />
          ))}
        </div>
      </div>
      <p className="review__description">
        {review.description}
      </p>
    </li>
  );
};