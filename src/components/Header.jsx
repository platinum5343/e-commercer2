import  { useState } from 'react'
import css from './Header.module.css'
import shopify from '../assets/Shopfy..png'
import {CgShoppingBag} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'


const Header = () => {

  const [ShowMenu, setShowMenu] = useState(true)

  const toggleMenu = () => {
    setShowMenu((ShowMenu)=>!ShowMenu)
  }

  return (
    <div className={css.container}>
        <div className={css.logo}>
          <img src={shopify} alt='' />

        </div>
        <div className={css.right}>

          <div className={css.bars} onClick={toggleMenu}>
            <GoThreeBars/>
          </div>

            <input type="text" className={css.search} placeholder='search' />
           
             <ul className={css.menu} style={{display: ShowMenu? 'inherit': 'none' }}>
              <li>collections</li>
              <li>Brands</li>
              <li>New</li>
              <li>Sales</li>
              <li>ENG</li>
             </ul>

          
          <CgShoppingBag className={css.cart}/>
            </div>
        </div>
    
  )
}

export default Header