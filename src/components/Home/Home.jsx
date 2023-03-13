import React from 'react'
import Hero from '../Hero/Hero'
import Slider from '../slider/Slider'
import Testimonials from '../testimonials/Testimonials'
import Product from "../products/Product";
import Special from "../special/Special";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Slider />
      <Product />      
     <Special/>
      <Testimonials/>

      </div>
  )
}

export default Home;