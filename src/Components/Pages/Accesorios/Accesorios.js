import React from 'react'
import "./styles.css"
import Item from 'antd/es/list/Item'
import ItemListContainer from '../../ItemListContainer/ItemListContainer'
import ItemListContainerBebidas from '../../ItemListContainerBebidas/ItemListContainerBebidas'
import ItemListContainerAccesorios from '../../ItemListContainerAccesorios/ItemListContainerAccesorios'

function Accesorios(products) {
  return (
    <div>
        <ItemListContainerAccesorios></ItemListContainerAccesorios>
    </div>
  )
}

export default Accesorios