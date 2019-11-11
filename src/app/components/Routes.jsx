// app/javascript/main/components/Routes.jsx

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../scenes/Home'
import Genre from '../../scenes/Genre'
import Movie from '../../scenes/Movie'
import Recent from '../../scenes/Recent'
import MyList from '../../scenes/MyList'
import Search from '../../scenes/Search'

const Routes = (props) => (
  <Switch>
    <Route exact path="/">
      <Home
        slideLength={props.slideLength}
        genres={props.genres}
        key={props.slideLength}
      />
    </Route>

    <Route
      path={`/genres/:slug`}
      render={(routeProps) =>
        <Genre
          {...props}
          {...routeProps}
          key={routeProps.match.params.slug}
        />
      }
    />

    <Route
      path={`/movies/:slug`}
      render={(routeProps) =>
        <Movie
          {...props}
          {...routeProps}
          key={routeProps.match.params.slug}
        />
      }
    />

    <Route path="/recent">
      <Recent slideLength={props.slideLength} />
    </Route>

    <Route path="/my-list">
      <MyList slideLength={props.slideLength} />
    </Route>

    <Route
      path="/search"
      render={(routeProps) => <Search {...props} {...routeProps} />}
    />
  </Switch>
)

export default Routes
