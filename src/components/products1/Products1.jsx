import React from 'react'
import css from './product1.module.css'
import Card from '../card/Card';

const Products1 = ({products}) => {



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
    <section className={css.container}>
      
        <div className={css.products}>
            
                <div>Best selling products</div>
                
                <div>See All products</div>
            
                </div>

           
           <div className={css.list}>
            
                <div>
                <div className={css.row}>
                   <div className={css.col}>
                                            

                                   
         
         {ProductsData.map(item=>(
          <Card item={item} key={item.id}/>
          ))}
          </div>       
                </div>
               
                </div>
               
            
           </div>
        
    </section>
  )
}

export default Products1








