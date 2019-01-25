import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Layout from './layouts';
import IndexPage from './pages/IndexPage';

function RouterConfig({ history }) {
  return (
    <Layout>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default RouterConfig;
