import React from "react";
import axios from 'axios';

export default function ProductListItem(props) {
    
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
            // fetch('http://localhost/addtocart.php', {
            //     method: 'post',
            //     body: JSON.stringify(data)
            //   }).then(function(response) {
            //     return response.json();
            //   }).then(function(data1) {
            //     console.log('Created Gist:', data1);
            //   });
            axios.post('http://localhost/addtocart.php', data, axiosConfig).then(res => {
              //  console.log(res);
              //  console.log(res.data);
              } );
  }
    
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
            <button onClick = { () => addCart(props.product)} >Add to Cart</button>
        </div>
    </div>);
  }