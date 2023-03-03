import Logotipo from '../Images/Logotipo.png'
import React from "react";
import "../Navbar/styles.css"
import Cartwidget from '../Cartwidget/Cartwidget';
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from 'react-redux';
import { CartContext } from '../ItemContext/ItemContext';
import { useContext, useEffect } from 'react';
import { useState } from 'react';

const Navbar = ({ categoria1, categoria2, categoria3 }) => {

  const { getQuantity } = useContext(CartContext)
  const { cart } = useContext(CartContext)
  const [quantity, setQuantity] = useState()

    useEffect(() => {
    const onClick = () => {
      let quantity = getQuantity(cart)
      setQuantity(quantity)
    }
    onClick()
   },)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark display-line">
        <div className="container-fluid">
          <NavLink to="./"> <img src={Logotipo} to="./" alt="Logo header" className="img-fluid marginLogo" width="170px" height="130px" /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse display-dropdown" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="./" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </a>
                <ul className="dropdown-menu">
                  <NavLink to="/" className="dropdown-item">HOME </NavLink>
                  <NavLink to="/bebidas" className="dropdown-item">Bebidas </NavLink>
                  <NavLink to="/accesorios" className="dropdown-item">Accesorios </NavLink>
                  </ul>
              </li>
            </ul>
          </div>
          <div className='div-iconShoppingCart'>
            <h1 className='icon-shoppingCart'><AiOutlineShoppingCart size={28} /></h1>
            <NavLink to="/shoppingCart"><Cartwidget quantity={quantity}></Cartwidget></NavLink>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar