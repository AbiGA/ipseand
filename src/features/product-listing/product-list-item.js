import React from "react";
import axios from 'axios';

export default function ProductListItem(props) {
    return (
      <div className="product-list-item">
        <h3>{ props.product.name }</h3>
        <img
            height={100}
            title={props.product.name}
            src={props.product.image}
            alt="myim"
        />
        <div>{ props.product.description }</div>
        <div>${ props.product.price }</div>
        <div>
            <button id="btn" onClick = { function() {addCart(props.product)}} >Add to Cart</button>
        </div>
    </div>);
  }
  function addCart(name) {
    var data = {
        "name": name.name,
        "image": name.image,
        "description": name.description
     };
     let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
   
    axios.post('http://localhost/addtocart.php', data, axiosConfig).then(res => {
         console.log(res);
         alert("Product Successfully added to your cart");
       // console.log(res.data);
      } ).catch(err => console.log('Error: ', err));
}
