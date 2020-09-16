import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewProduct from './pages/NewProduct/index';
import NewItem from './pages/NewProduct/NewItem/index';
import NewFood from './pages/NewProduct/NewFood/index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/product" component={NewProduct}/>
                <Route path="/product/new/item" component={NewItem}/>
                <Route path="/product/new/food" component={NewFood}/>
            </Switch>
        </BrowserRouter>
    );
}