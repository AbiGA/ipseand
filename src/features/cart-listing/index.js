import React from 'react'
import CartListItem from '../cart-listing/cart-list-item'

export default function CartListing(props) {
  return <div className="cart-listing">
    {
      props.products.map( (product,i) =>
        <CartListItem product={product}  key={i} />)
    }
  </div>
}