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
    
    changeUrl = () => window.location.pathname;

  componentDidMount() {
    this.changeUrl();
  }

  render() {
    return (
      <>
        <Header paths={routes} homeHeader={this.changeUrl() === '/default/ana-sayfa' ? true : ''} />
        <Switch>{this.getRoutes(routes)}</Switch>
      </>
    );
  }
}

export default DefaultLayout;
