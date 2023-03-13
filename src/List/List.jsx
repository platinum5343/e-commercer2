import React from 'react'
import Card from '../components/card/Card'
import './List.scss'

const List = () => {


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
     {
      id: 5,
         name: 'Foundation',
         detail: 'Super Skin Care',
         price: '25',
         img: "https://www.linkpicture.com/q/img18.png",
         type: 'foundation',
     },
     {
      id: 6,
         name: 'Foundation',
         detail: 'Super Skin Care',
         price: '25',
         img: "https://www.linkpicture.com/q/img18.png",
         type: 'foundation',
     },
      ]

  return (
    <div className='list'>{ProductsData?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}</div>
  )
}

export default List