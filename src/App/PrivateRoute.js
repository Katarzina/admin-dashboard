import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { pathToInsurance } from './RouterApp'

import { useAuth } from '../../context/auth'

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuth } = useAuth()
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: pathToInsurance,
              state: { referer: props.location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
