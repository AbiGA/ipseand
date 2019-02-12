import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { Contact } from "./contact/Contact";

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
    </Switch>
)

export default Router