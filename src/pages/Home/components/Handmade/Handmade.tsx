import React from 'react'
import "./Handmade.scss";
import handmade from "../../../../images/photos/handmade.png"
import { Button } from '../../../../components';

export const Handmade = () => {
  return (
    <section className="handmade" id="handmade">
      <img src={handmade} alt="handmade" className="handmade__photo" />
      <div className="handmade__description">
        <p className="handmade__description--overview">
          Quality Craftmanship from build to delivery
        </p>
        <h1 className="handmade__description--title">
          Discover the beauty of a handmade kitchen
        </h1>
        <p className="handmade__description--subtitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae minima error enim perferendis? Magni, ex repellat facilis consectetur dolorum aliquid?
        </p>
        <Button title="About Us" />
      </div>
    </section>
  );
};