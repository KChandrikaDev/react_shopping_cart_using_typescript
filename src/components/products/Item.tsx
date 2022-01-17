import React from 'react'
import { CartItemType, ProductAllItemsType, ProductItemType } from '../types/cartItem.types'
import "../../App.css";

type Props = {
   
    addToCart:(clickedItem:ProductAllItemsType)=>void;
    item:ProductAllItemsType;
    // handleAddToCart:(clickedItem:ProductAllItemsType)=>void;
}

const Item:React.FC<Props>=({item,addToCart})=> {
    const [productIndex, setProductIndex] = React.useState(0)

    return (
       
        <div id="card-item" key={item.id} className="card shadow p-3">
            <img  src={item.image} alt={item.title}  height="150px"/>
            <h5 className="title">{item.title}</h5>
           <p className="p ">{item.description}</p>
           <h5>Price:${item.price}</h5>
           <button 
        //    onClick={()=>handleAddToCart(item)}
            onClick={()=> addToCart(item)}
           className="btn btn-primary" 
           style={{fontWeight:"bold"}}> 
           Add To Cart
           </button>

        </div>
      
    )
}

export default Item
