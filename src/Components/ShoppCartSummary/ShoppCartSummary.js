import React, { useContext } from 'react'
import "./styles.css"
import { CartContext } from '../ItemContext/ItemContext'
import { useState } from 'react';
import { useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

function ShoppCartSummary() {
  const { cart } = useContext(CartContext)
  const [sum, setSum] = useState();
  let cartLenght = cart.length
  console.log(cartLenght)

  useEffect(() => {
    const recorre = () => {
      let subtotal = cart.reduce((acumulador, actual) => acumulador + (actual.price * actual.quantity), 0);
      setSum(subtotal)
    };
    recorre()
  },)
  return (
    <div className='section-detail-component'>
      <div >
      </div>
      <div className='precio-div'>
        {cartLenght > 0 ? <p>FINALIZÁ LA COMPRA</p> : <p>AÚN SIN PRODUCTOS</p>}
      </div>
      <div className='description-div'>
        {cartLenght > 0 ? <p>Subtotal : ${sum}</p> : null}
      </div>
      <div className='product-quantity'>
        {cartLenght > 0 ? [<NavLink style={{ textDecoration: 'none' }} to="/formulario" > <Button variant="contained" className='button-decoration' size="small">Finalizá la compra</Button></NavLink>] : [<NavLink style={{ textDecoration: 'none' }} to="/">  <Button variant="contained" className='button-decoration' size="small">VOLVER A HOME</Button></NavLink>]}
      </div>
    </div>
  )
}

export default ShoppCartSummary