import React from "react";
import ProductListing from "../../features/product-listing";

export class  Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          prod: [],
        };
      }
    getData() {
        fetch('http://localhost/products.php')
        .then((response) => response.json())
        .then((dat) => {
            this.setState({ prod: dat })
        });
    }
    componentDidMount() {
        this.getData();
    }
    render () {
        return(
            <div>
                <p>This is Home Component</p>
                <ProductListing products={this.state.prod} />
            </div>
        );
    }

}