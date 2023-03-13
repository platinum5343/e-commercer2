import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';





const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
      
      <div className="image">
        <div className='icon'>
        <FavoriteBorderIcon/>
        </div>
        <img src={item.img} alt="" />
      </div>
      <h2>{item.detail}</h2>
      <div className="prices">
        <h2>${item.price}</h2>
        <button>shop now</button>
      </div>
    </div>
    <div className='card'>
      
      <div className="image">
        <div className='icon'>
        <FavoriteBorderIcon/>
        </div>
        <img src={item.img} alt="" />
      </div>
      <h2>{item.detail}</h2>
      <div className="prices">
        <h2>${item.price}</h2>
        <button>shop now</button>
      </div>
    </div>
    </Link>
  )
}

export default Card