import React from 'react';
import { reviews } from "../../../../config";
import { Review } from "../Riview/Review";
import "./Reviews.scss";

export const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <h1 className="reviews__title">
        Reviews
      </h1>

      <ul className="reviews__list">
        {reviews.map(review => (
          <Review  review={review} key={review.id}/>
        ))}
      </ul>
    </section>
  );
};