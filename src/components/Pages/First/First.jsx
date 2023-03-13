import React, { useState } from 'react'
import './First.scss'
import { TestimonialsData } from '../../../data/testimonials';

import StarIcon from '@mui/icons-material/Star';
import Card from '../../card/Card';

const First = () => {


  const [selectedImg, setSelectedImg] = useState(0);
  

  const images = [
    "https://www.linkpicture.com/q/img9_2.png",
    "https://www.linkpicture.com/q/img10_1.png",
    "https://www.linkpicture.com/q/img12.png",
    "https://www.linkpicture.com/q/img11.png",
  ];

  const ProductsData = [{
    id: 1,
    name: 'SKIN',
    img: "https://www.linkpicture.com/q/img15.png",
    detail: 'Super Skin Care',
    price: '25',
    type: 'skin care',
},
 {
  id: 2,
     name: 'SKIN',
     detail: 'Super Skin Care',
     price: '30',
     img: "https://www.linkpicture.com/q/img16.png",
     type: 'skin care',
 },
 {
  id: 3,
     name: 'NATURE',
     detail: 'Super Skin Care',
     price: '25',
     img:"https://www.linkpicture.com/q/img17.png" ,
     type: 'skin care',
 },
 {
  id: 4,
     name: 'Foundation',
     detail: 'Super Skin Care',
     price: '25',
     img: "https://www.linkpicture.com/q/img18.png",
     type: 'foundation',
 },
  ]

  return (
    <div className="head">
    <div className='first'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
          <img src={images[2]} alt="" onClick={e=>setSelectedImg(2)}/>
          <img src={images[3]} alt="" onClick={e=>setSelectedImg(3)}/> 
        </div>
        <div className="mainImg">
        <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Louis Vuitton LV Trainer</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque explicabo quia illo error, perferendis quas pariatur atque optio ad vitae voluptas accusantium nisi obcaecati accusamus quod voluptatibus expedita dolorem, eius impedit harum sed temporibus asperiores? Dolores tempora sunt quos laboriosam blanditiis enim hic assumenda expedita, modi repellendus ipsa quas consectetur!</p>
        <div className='rights'>
        <span className='icon'>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        </span>
        <span>12 Reviews</span>
        </div>
        <span>color</span>

        <div className='item'>
        <span>$12,000</span>
        <button>Add to cart</button>
        </div>
      </div>

    </div>

    <div className="reviws">
      <div>review</div>

      <div>
      {
                    TestimonialsData.map((testimonial, i)=>(
                        
                            <div  >
                                <img src={testimonial.image} alt="" />
                                <span>{testimonial.comment}</span>
                              <hr />
                                <div >
                                    <div>
                                <span>{testimonial.name}</span>
                                <span>{testimonial.title}</span>
                                </div>
                                <div>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                </div>
                                </div>
           
                            </div>
                    ))
                }
      </div>
    </div>

    <div className="products">
      <h1>Similar Products</h1>
      <div className="simple">
      {ProductsData.map(item=>(
          <Card item={item} key={item.id}/>
          ))}
          </div>
    </div>
    </div>
  )
}

export default First