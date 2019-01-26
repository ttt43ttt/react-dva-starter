import React from 'react';
import { Router } from 'dva/router';

import App from '@/App';
import renderRoutes from '@/utils/renderRoutes';
import BasicLayout from '@/layouts/BasicLayout';
import IndexPage from '@/pages/IndexPage';

const routes = [
  {
    path: '/',
    component: BasicLayout,
    routes: [{ path: '/', exact: true, redirect: '/home' }, { path: '/home', component: IndexPage }]
  }
];

function RouterConfig({ history }) {
  return (
    <App>
      <Router history={history}>{renderRoutes(routes)}</Router>
    </App>
  );
}

export default RouterConfig;
