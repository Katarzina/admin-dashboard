import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ErrorPage from '../../pages/404'
import Login from '../../pages/Login'
import Dashboard from '../../pages/Dashboard'

export const RouterApp = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="*" component={ErrorPage} />
  </Switch>
)
