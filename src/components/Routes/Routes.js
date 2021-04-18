import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  Genre,
  Home,
  Movie,
  Recent,
  MyList,
  Search
} from 'scenes'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />

    <Route path='/genres/:slug' component={Genre} />

    <Route path='/movies/:id' component={Movie} />

    <Route path='/recent' component={Recent} />

    <Route path='/my-list' component={MyList} />

    <Route path='/search' component={Search} />
  </Switch>
)

export default Routes
