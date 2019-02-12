import React from 'react'
import ProductListItem from './product-list-item'

export default function ProductListing(props) {
  return <div className="product-listing">
    {
      props.products.map( (product,i) =>
        <ProductListItem product={product}  key={i} />)
    }
  </div>
}