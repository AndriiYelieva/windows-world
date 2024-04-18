import React from 'react'
import "./Gallery.scss";
import { Button } from '../../../../components';
import { gallery } from '../../../../config/config';

export const Gallery = () => {

  return (
    <section className="gallery">
      <h1 className="gallery__title">Customer Gallery</h1>
      <ul className="gallery__list">
        {gallery.map(element =>
          <button type="button" className="gallery__button">
            <img
              src={element.photo}
              alt={element.alt}
              key={element.id}
              className="gallery__item"
            />
          </button>
        )}
      </ul>

      <Button title="View More" />
    </section>
  );
};