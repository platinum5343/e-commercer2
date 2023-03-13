import React from 'react'
import './Cart.scss'
import img6 from '../../../assets/img6.png'
import img7 from '../../../assets/img7.png'
import { DeleteForeverOutlined } from '@mui/icons-material';

const Cart = () => {


  const data = [
    {
      id: 1,
      title: "skirt",
      desc: "skirt",
      img: img6,
      img2: img7,
      isNew:true,
      oldPrice: 19,
      price: 12, 
    },
    {
      id: 2,
      title: "skirt",
      desc: "skirt",
      img: img7,
      img2: img6,
      isNew:true,
      oldPrice: 14,
      price: 11, 
    },
  ]

  return (
    <div className='cart'>
      <div className="page">
      <div className="carts">
          <h2>Shipping method</h2>
          <div className="begin">
          <div className='ship'>
            <div className="inner">
            <h2>standard</h2>
            <span> 2-3 weeks delivery</span>
            <div className='icon'>
              <span>free</span>
              <span>dree</span>
            </div>
            </div>
          </div>
          <div className='ships'>
          <div className="inner">
            <h2>standard</h2>
            <span> 2-3 weeks delivery</span>
            <div className='icon'>
              <span>$12,000</span>
              </div>
            </div>
          </div>
      </div>

      <div className="address">
        <h1>Shipping Address</h1>
        <form action="">
          <div className="inputs">
          <input type="text" value="Country" />
          <input type="text" value="Country" />
          </div>
          <div>
          <textarea name="street adrress" id="street adress"  cols="20" rows="10"></textarea>
          </div>

          <input className='lastin' type="submit" value="continue to payment"></input>
        </form>
      </div>
      </div>  
      </div>
<div className="line">
  <hr />
</div>
      <div className="summary">
        
      <div className='carted'>
      <h1>Products in your cart</h1>
      {data?.map(item=>(
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">1 x ${item.price}</div>
            
          </div>
          
         <DeleteForeverOutlined className="delete" />
        </div>
        ))}
        <div>
        <hr />
        </div>
    <div className='total'>
      <span>SUBTOTAL</span>
      <span>$123</span>
    </div>
    <div className='total'>
      <span>Shipping</span>
      <span>$0.00</span>
    </div>
    <hr />
    <div className='total'>
      <span>TOTAL</span>
      <span>$123</span>
    </div>
    </div>
      </div>
    </div>
  )
}

export default Cart