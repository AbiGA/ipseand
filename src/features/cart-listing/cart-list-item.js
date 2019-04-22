import React from "react";
import axios from 'axios';

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
         <button onClick = { function() {remove(props.product.id)}}>Delete Product</button>
    </div>);
  }
  function remove(id) {
    axios.delete('http://localhost/deletefromcart.php', { data: { id: id } }).then(res => {
         console.log(res);
         alert("Product Successfully deleted from your cart");
      } ).catch(err => console.log('Error: ', err));
}

