import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import css from './special.module.css'

import {SpecialProducts} from '../../data/products'
import { Navigation, Pagination } from 'swiper';

const Special = () => { 
  return (
    <div className={css.container1}>
        <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1
          },
          0: {
            slidesPerView: 1
          }
        }}
        modules={[Pagination, Navigation]}
        loopFillGroupWithBlank={true}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        >
            {SpecialProducts.map((special, i) => (
              <SwiperSlide>
                <div className={css.special}>
                <div className={css.special1}>
                  <div className={css.name}>
                    <img src=
                      {special.img} alt="" width={400} />
                  </div>
                  <div className={css.special2}>
                  <div><span>
                    {special.name}
                  </span></div>
                    <div><span>
                      {special.price}
                    </span></div>
                    <div><span>
                      {special.detail}
                    </span></div>
                  <div>shop now</div>
                  </div>
                </div>
              
                </div>
          </SwiperSlide>
              
              ))}
        </Swiper>
    </div>
  )
}

export default Special