import React from 'react'
import ItemSearch from '../ItemSearch/ItemSearch';
import "./styles.css"
import { Link } from "react-router-dom";

function ItemListSearch({ search }) {
  return (
    <div className='Cards-List-search'>
      {Array.isArray(search) ? search.map((producto) => {
        return (
          <Link to={`/productDetail/${producto.brand}`}>
            <ItemSearch search={producto} key={producto.id} />
          </Link>
        )
      }) : null}
    </div>
  )
}

export default ItemListSearch