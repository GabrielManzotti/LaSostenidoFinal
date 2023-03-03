import React from 'react'
import "./styles.css"
import Item from 'antd/es/list/Item'
import ItemListContainer from '../../ItemListContainer/ItemListContainer'
import ItemListContainerBebidas from '../../ItemListContainerBebidas/ItemListContainerBebidas'

function Bebidas(products) {
  return (
    <div>
        <ItemListContainerBebidas></ItemListContainerBebidas>
    </div>
  )
}

export default Bebidas