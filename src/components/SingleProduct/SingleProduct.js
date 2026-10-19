import React from 'react'
import '../SingleProduct/SingleProduct.css'

import {useDispatch, useSelector} from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/cartSlice';

function SingleProduct({product}) {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cartReducer.cart)
  const curItem = cart.find(item => item.id == product.id)
  const curQuantity = curItem ? curItem.quantity : 0;

  return (
    <div className='singleProduct' >
      <div className="singleImage">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="productInfo">
        <h3> {product.title} </h3>
        <p> ${product.price} </p>
      </div>
      <div className="productQuantity">
        <button onClick={() => dispatch(removeFromCart(product.id))} >-</button>
        <p> {curQuantity} </p>
        <button onClick={() => dispatch(addToCart(product.id))} >+</button>
      </div>
    </div>
  )
}

export default SingleProduct