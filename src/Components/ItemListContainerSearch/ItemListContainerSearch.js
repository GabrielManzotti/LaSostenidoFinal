import React from 'react'
import ItemListSearch from '../ItemListSearch/ItemListSearch'

function ItemListContainerSearch({ search }) {
  return (
    <div>
      <div>

      </div>
      {search ? <ItemListSearch search={search} /> : null}
    </div>
  )
}

export default ItemListContainerSearch