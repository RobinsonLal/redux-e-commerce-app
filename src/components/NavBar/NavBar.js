import React from 'react'

import { FaOpencart } from "react-icons/fa";

import '../NavBar/NavBar.css'
import { useSelector } from 'react-redux';

function NavBar() {

  const cart = useSelector(state => state.cartReducer.cart)

  let count = 0;
  cart.forEach((item) => (count += item.quantity))

  return (
    <nav>
      <div className="leftNav"> <h2>Amazon</h2> </div>
      <div className="rightNav">
        <div className="cart"><FaOpencart size={30} /></div>
        <div className="cartQuantity"> {count} </div>
      </div>
    </nav>
  )
}

export default NavBar