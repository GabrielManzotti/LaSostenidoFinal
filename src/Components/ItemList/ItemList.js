import React from 'react'
import Item from '../Item/Item'
import "./styles.css"
import { Link } from "react-router-dom";

function ItemList({ children, products, selected }) {
  return (
    <div className='Cards-List'>
      {products.map((producto) => {
        return (
          <Link style={{ textDecoration: 'none' }} to={`/productDetail/${producto.brand}`}>
            <Item products={producto} key={producto.brand} />
          </Link>
        )
      })}
    </div>
  )
}

export default ItemList