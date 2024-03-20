import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Header.scss';

import { Nav } from '../../../../components';
import { banners } from '../../../../config';

export const Header = () => {

  return (
    <header className="header">
      <Nav />

      <button
        type="button"
        className="swiper-button-prev"
        aria-label="Previous slide"
      />
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Pagination, Navigation]}
      >
        {banners.map(banner => (
          <SwiperSlide key={banner.id}>
            <img
              src={banner.image}
              alt={banner.name}
              className="header__banner"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        className="swiper-button-next"
        aria-label="Next slide"
      />

      <div className="header__title">
        <h1 className="header__title--name">
          Discover a World of Windows and Doors at Windows World!
        </h1>

        <p className="header__title--description">
          Elevate your living spaces with our exquisite selection of premium windows and doors.
        </p>
      </div>

      <Link
        to="/windows-world/services"
        className="header__link"
      >
        Learn More
      </Link>
    </header>
  );
}
