import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Swiper.css';
import { Autoplay, Pagination } from 'swiper/modules';
import dataSwiper from '../../data/dataSwiper';
import { useAuth0 } from "@auth0/auth0-react";

const MySwiper = () => {
  const { isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
    <div className='carousel-container'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <div className='swiper-wrapper'>
        {dataSwiper.map((slide) => (
          <SwiperSlide
          key={slide.id}
          style={{
              backgroundImage: `url(${slide.img})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
              <div className='slide-cover'>
          <h2 className='slide-text'>{ slide.text }</h2>
          </div>
          </SwiperSlide>
        ))}
        </div>
      </Swiper>
    </div>
  ));
}

export default MySwiper;