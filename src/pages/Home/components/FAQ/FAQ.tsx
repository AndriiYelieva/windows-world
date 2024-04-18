import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { faq } from '../../../../config';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';

import "./FAQ.scss";
import { Button } from '../../../../components';

export const FAQ = () => {
  return (
    <section className="faq">

      <p className="faq__title">What Our Customers Say</p>
      <div className="faq__wrapper">
        <button
          type="button"
          className="faq__prev"
          aria-label="Previous slide"
        />
        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: ".faq__prev",
            nextEl: ".faq__next",
          }}
          modules={[Navigation]}
          className="faq__swiper"
        >
          {faq.map(feedback =>
            <SwiperSlide key={feedback.id} className="faq__slider">
              <h1 className="faq__slider--title">
                {feedback.title}
              </h1>
              <h4 className="faq__slider--description">{feedback.description}</h4>
              <p className="faq__slider--name">{feedback.name}</p>
            </SwiperSlide>
          )}
        </Swiper>
        <button
          type="button"
          className="faq__next"
          aria-label="Next slide"
        />
      </div>

      <Button title="Frequently Asked Questions" />
    </section>
  );
}
