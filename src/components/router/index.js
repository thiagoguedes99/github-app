import React from 'react';
import PropTypes from 'prop-types'

const Router = ({ routes = [], Switch, Route, ...props }) => (
  <Switch>
    {routes.map((item, index) => (
      <Route
        key={`${index}`}
        exact={item.exact}
        path={`${item.path}`}
        render={prop => (
          <item.component {...prop} {...props} {...item.props}/>
        )}
      />
    ))}
  </Switch>
)

Router.propTypes = {
  routes: PropTypes.array,
  Switch: PropTypes.any,
  Route: PropTypes.any,
}

export default Router
