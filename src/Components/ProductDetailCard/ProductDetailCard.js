import "./styles.css"
import React from 'react'

function ProductDetailCard({ data }) {
  const dataImage = data[0]
  return (
    <div className="div-image">

      {dataImage ? <img src={dataImage.imageFB} alt={data.brand} width="70%" height="70%"></img> : null}
    </div>
  )
}

export default ProductDetailCard