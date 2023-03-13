import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Second.scss'
import List from '../../../List/List';

const Second = () => {

  const lotId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000);


  return (
    <div className='second'>
      <div className="left">
        <div className="category">
        <div className="filterItem">
          <h2>Category</h2>
          <div className="inputItem">

            <input type="radio" id='asc' value='asc' name="price" />
            <label htmlFor="asc"> Electronics <span>123</span> </label>
            
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value='desc' name="price" />
            <label htmlFor="desc"> Fashion <span>20</span> </label>
          </div>
          <div className="inputItem">
            <input type="radio" id='sss' value='sss' name="price" />
            <label htmlFor="sss"> Home & Offices <span>123</span> </label>
          </div>
          <div className="inputItem">
            <input type="radio" id='ccs' value='ccs' name="price" />
            <label htmlFor="ccs"> Beauty <span>12</span> </label>
          </div>
          <div className="inputItem">
            <input type="radio" id='ssc' value='ssc' name="price" />
            <label htmlFor="ssc"> Portable <span>50</span> </label>
          </div>
        </div>
        </div>

        <div className="category">
        <div className="filterItem">
          <h2>Brand</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name="price" />
            <label htmlFor="asc">Bag Girls<span>123</span> </label>
          </div>
          <div className="inputItem">
            <input type="radio" id='eee' value='eee' name="price" />
            <label htmlFor="eee">Fcatriq <span>32</span> </label>
          </div>
          <div className="inputItem">
            <input type="radio" id='ddd' value='ddd' name="price" />
            <label htmlFor="ddd">coolbell <span>23</span> </label>
          </div>
          <div className="inputItem">
            <input type="radio" id='www' value='www' name="price" />
            <label htmlFor="www">dora <span>23</span> </label>
          </div>
          <div className="inputItem">
            <input type="radio" id='ggg' value='ggg' name="price" />
            <label htmlFor="ggg"> generic<span>19</span> </label>
          </div>
        </div>
        </div>



        <div className="category">
        <div className="filterItem">
          <h2>Size</h2>
          <div className="inputItem">
            <input type="radio" id='p' value='p' name="price" />
            <label htmlFor="p"> s <span>0</span></label>
          </div>
          <div className="inputItem">
            <input type="radio" id='aa' value='aa' name="price" />
            <label htmlFor="aa">M <span>12</span> </label>
          </div>
          <div className="inputItem">
            <input type="radio" id='ew' value='ew' name="price" />
            <label htmlFor="ew">L <span>40</span> </label>
          </div>
          <div className="inputItem">
            <input type="radio" id='as' value='as' name="price" />
            <label htmlFor="as">XL <span>60</span> </label>
          </div>
         
        </div>
        </div>


        <div className="price">
        <div className="filterItem">
          <h2>Average Price</h2>
          <div className="inputItems">
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <div className='tag'>
              <span>from</span>
            <span>$0</span>
            <span>to</span>
            <span>${maxPrice}</span>
            </div>
            <button>Apply filter</button>
          </div>
        </div>
      </div>
      </div>
      <div className="right">
      <List lotId={lotId} maxPrice={maxPrice}/>
      </div>
      </div>
  )
}

export default Second
