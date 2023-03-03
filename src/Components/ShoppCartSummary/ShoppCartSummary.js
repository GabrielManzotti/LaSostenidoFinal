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
        FINALIZA LA COMPRA
      </div>
      <div className='description-div'>
        subtotal : ${sum}

      </div>
      <div className='product-quantity'>
        <NavLink to="/formulario"> <Button variant="contained" size="small">Finalizá la compra</Button></NavLink>
      </div>
    </div>
  )
}

export default ShoppCartSummary