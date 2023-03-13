import React from 'react'
import css from './Testimonials.module.css'
import { TestimonialsData } from '../../data/testimonials';
import {Swiper, SwiperSlide} from 'swiper/react';
import { EastOutlined,  WestOutlined } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';



const Testimonials = () => {

    const [currentSlide, setCurrentSlide] = useState(0)


    const prevSlide = ()=>{
        setCurrentSlide(currentSlide === 0 ? 5 : (prev) => prev - 1)
      }
      const nextSlide = ()=>{
        setCurrentSlide(currentSlide === 5 ? 0 : (prev) => prev + 1)
      }


  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
            <div className={css.container}>
            <span>Here is what our clients have to say
            </span>
            </div> 
            
            <div className={css.icons}>
                <div className={css.icon1} onClick={prevSlide}>
                    <WestOutlined/>
                </div>
                <div className={css.icon2} onClick={nextSlide}>
                    <EastOutlined/>
                </div>
        </div>
        </div>
          

        <div className={css.carousel}>
            <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className={css.tCarousel}
            breakpoints={{
                856: {
                    slidesPerView: 3
                },
                640:{
                    slidesPerView: 2
                },
                0:{
                    slidesPerView: 1
                }
            }}
            >
                {
                    TestimonialsData.map((testimonial, i)=>(
                        <SwiperSlide>
                            <div className={css.testimonial} style={{transform: `translate(-${currentSlide * 15}vw)`}}>
                                <img src={testimonial.image} alt="" />
                                <span>{testimonial.comment}</span>
                              <hr />
                                <div className={css.afters}>
                                    <div className={css.after}>
                                <span>{testimonial.name}</span>
                                <span>{testimonial.title}</span>
                                </div>
                                <div className={css.icona}>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                </div>
                                </div>
           
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials