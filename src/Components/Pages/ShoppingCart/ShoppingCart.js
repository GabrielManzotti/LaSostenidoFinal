import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import "./styles.css"
import TableShoppCart from '../../TableShoppCart/TableShoppCart';
import { CartContext } from '../../ItemContext/ItemContext';
import ShoppCartSummary from '../../ShoppCartSummary/ShoppCartSummary';
import { useState } from 'react';


function ShoppingCart() {
  const value = useSelector((state) => state.counter.value)
  const products = useSelector((state) => state.addShopCart.value)

  const { cart } = useContext(CartContext)

return (
    <div className='section-shoppCart'>
      <div className='table-shoppCart'>
        {cart.map((producto) => {
          return (
            <TableShoppCart product={producto} key={producto.brand} />
          )
        })}
      </div>
      <div className='summary-shoppCart'>
        <ShoppCartSummary />
      </div>
    </div>
  )
}

export default ShoppingCart