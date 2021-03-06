import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import Main from '../pages/Main'


const Routes: React.FC = () => (
  <Switch>
    <Redirect exact from="/" to="/main/books" />
    <Redirect exact from="/main" to="/main/books" />
    <Switch>
      <Route path="/main" component={Main} />
    </Switch>
  </Switch>
)

export default Routes
