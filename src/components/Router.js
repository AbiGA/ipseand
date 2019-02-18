import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { Contact } from "./contact/Contact";
import { Cart } from "./cart/Cart";

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/cart' component={Cart} />
    </Switch>
)

export default Router