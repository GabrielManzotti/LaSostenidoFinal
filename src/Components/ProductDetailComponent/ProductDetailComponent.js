import React from 'react'
import "./styles.css"
import ProductQuantity from '../ProductQuantity/ProductQuantity';

function ProductDetailComponent({ data }) {

  const dataDetail = data[0]
  return (
    <div className='section-detail-component'>
      <div >
        {dataDetail ? <p className='titulo-brand'>{dataDetail.brand}</p> : null}
      </div>
      <div className='precio-div'>
        {dataDetail ? <p className='precio-p'>${dataDetail.price},00</p> : null}
      </div>
      <div className='description-div'>
        {dataDetail ? <p className='description-p'>{dataDetail.description}</p> : null}
      </div>
      <div className='product-quantity'>
        {dataDetail ? <ProductQuantity data={dataDetail} /> : null}
      </div>
    </div>
  )
}

export default ProductDetailComponent