import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './screens/Home';
import Product from './screens/Product';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/product/:id' component={Product} />
      </Switch>
    </BrowserRouter>
  )
}