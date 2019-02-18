import React, { Component } from 'react';
import './App.css';
import './header.css';

import Router from './components/Router';
import { NavLink } from 'react-router-dom';


const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
    <li><NavLink to='/cart'>Cart</NavLink></li>
  </ul>
</nav>

const NavigationFooter = (props) => <nav>
  <ul>
    <li><NavLink to='/'>Facebook</NavLink></li>
    <li><NavLink to='/about'>Twitter</NavLink></li>
    <li><NavLink to='/contact'>Youtube</NavLink></li>
  </ul>
  Copyright &copy; CompanyName
</nav>

class App extends Component {
  render() {
    return (
     <div className='page-container'>
       <Navigation />
       <Router />
       <NavigationFooter />
     </div>
    );
  }
}

export default App;
