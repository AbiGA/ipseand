import React, { Component } from "react";
import Router from "./Router";
import { NavLink } from "react-router-dom";

const Navigation = props => (
  <nav>
    <ul>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart">cart</NavLink>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div>
        <h1>My Page</h1>
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
