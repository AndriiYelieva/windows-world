// import 'starability/starability-minified.css';
import { reviews } from "../../../../config";
import { Review } from "../riview/Review";
import "./Reviews.scss";

export const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <h1 className="reviews__title">
        Reviews
      </h1>

      <ul className="reviews__list">
        {reviews.map(review => (
          <Review  review={review} />
        ))}
      </ul>
    </section>
  );
};