import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Slider.css'

import {SliderProducts} from '../../data/products'
import { Navigation, Pagination } from 'swiper';

const Slider = () => { 
  return (
    <div className="s-container">
        <Swiper
        breakpoints={{
          640: {
            slidesPerView: 3
          },
          0: {
            slidesPerView: 1
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        >
            {SliderProducts.map((slide, i) => (
              <SwiperSlide>
                <div className='left'>
                <div className="left-s">
                  <div className="name">
                    <div>
                    <span>
                      {slide.name}
                    </span>
                    </div>
                    <div>
                    <span>
                      {slide.detail}
                    </span>
                    </div>
                  <span>
                    {slide.price}
                  </span>
                  </div>
                </div>
                <img src={slide.img} alt="product" className="img-p" />
                </div>
          </SwiperSlide>
              
              ))}
        </Swiper>
    </div>
  )
}

export default Slider