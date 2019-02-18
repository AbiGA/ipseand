import React from "react";
import CartListing from "../../features/cart-listing";

export class  Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          prod: [],
        };
      }
      componentDidMount() {
        this.fetchCart();
    }
    fetchCart(){
        fetch('http://localhost/viewcart.php')
        .then((response) => response.json())
        .then((dat) => { 
            this.setState({ prod: dat })
        }).catch(error => this.setState({
            error,
            isLoading: false
          }));
    }
    render () {
        return(
            <div>
                <p>This is Cart Component</p>
                <CartListing products={this.state.prod} />
            </div>
        );
    }

}