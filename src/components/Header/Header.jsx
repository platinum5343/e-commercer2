
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import css from './Header.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import shopy from '../../assets/Shopfy..png'
import './Header.scss';
import Searches from "../search/searches";
// import Cart from '../Cart/Cart'


const Header = () => {

  const [open,setOpen] = useState(false);

    return (
      <div className='navbar'>
          <div className='wrapper'>
              <div className="left">
              <div className="item">
                  <Link to="/"> <img src={shopy} alt="" /></Link>
                  </div>
              </div>
                  <div className="center">
                 <Searches/>
                  </div>
                      <div className="right">
                      <div className="icons">
                        <div className="cartIcons">
                        <FavoriteBorderIcon/>
                        <span>0</span>
                        </div>
                        <div className="cartIcon" onClick={()=>setOpen(!open)}>
                        <ShoppingCartIcon/>
                        <span>0</span>
                        </div>
                        </div>
                      </div>
          </div>
          {/* {open && <Cart/>} */}
      </div>
    )
  }
  

export default Header;