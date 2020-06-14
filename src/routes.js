// App pages
import ProductPage from './containers/ProductPage/ProductPage';
import HomePage from './containers/HomePage';

// Auth pages
import LoginPage from './containers/LoginPage/LoginPage';

const routes = [
  {
    path: '/product',
    name: 'Product',
    component: ProductPage,
    layout: '/default',
  },
  {
    path: '/ana-sayfa',
    name: 'Ana Sayfa',
    component: HomePage,
    layout: '/default',
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    layout: '/auth',
  },
];

export default routes;
