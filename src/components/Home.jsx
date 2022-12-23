import React from 'react'
import css from './Header.module.css'

const Home = () => {
  return (
    <div className={css.container}>

        <div className={css.h_sides}>
            <span>Find everything you need with ease</span>
        </div>

        <div className={css.text2}>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laudantium dicta eos? Atque, sed tenetur exercitationem dolore nobis labore vel obcaecati ipsa sunt voluptas? Quas accusamus unde labore, eaque odit dicta sint adipisci ipsum esse doloribus. Dolorem odio nisi quisquam?</div>
          <button>shop now</button>
        </div>
    </div>
  )
}

export default Home