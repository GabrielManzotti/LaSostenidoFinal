import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import "./styles.css"
import TableShoppCart from '../../TableShoppCart/TableShoppCart';
import { CartContext } from '../../ItemContext/ItemContext';
import ShoppCartSummary from '../../ShoppCartSummary/ShoppCartSummary';
import { useState } from 'react';
import Button from '@mui/material/Button';
import EmptyCart from "../../Utils/7077270.png"


function ShoppingCart() {
  const value = useSelector((state) => state.counter.value)
  const products = useSelector((state) => state.addShopCart.value)
  const { cart } = useContext(CartContext)
  const { clearCart } = useContext(CartContext)
  let cartLenght = cart.length

  return (
    <div className='section-shoppCart'>
      <div className='table-shoppCart'>
        <div>
          {cart.map((producto) => {
            return (
              <TableShoppCart product={producto} key={producto.brand} />
            )
          })}
        </div>
        <div className='clear-cart'>
          {cartLenght > 0 ? <Button variant="contained" size="small" onClick={() => clearCart()}>Eliminá el carrito</Button> : <img src={EmptyCart} to="./" alt="Logo header" width="500" height="500" />}
        </div>
      </div>
      <div className='summary-shoppCart'>
        <ShoppCartSummary />
      </div>
    </div>
  )
}

export default ShoppingCart