import React from "react";

export default function CartListItem(props) { 
    return (
      <div className="cart-list-item">
        <h3>{ props.product.name }</h3>
        <img
            height={100}
            title={props.product.name}
            src={props.product.image}
            alt="myim"
        />
    </div>);
  }
