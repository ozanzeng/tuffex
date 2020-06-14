import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Router
import routes from '../routes';
import Header from '../components/Header';

class DefaultLayout extends Component {
  getRoutes = route =>
    route.map((prop, key) => {
      if (prop.layout === '/default') {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
      }
      return <Redirect key={key} to="/default/ana-sayfa" />;
    });

  render() {
    return (
      <>
        <Header paths={routes} />
        <Switch>{this.getRoutes(routes)}</Switch>
      </>
    );
  }
}

export default DefaultLayout;
