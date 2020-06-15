// App pages
import ProductPage from './containers/ProductPage/ProductPage';
import HomePage from './containers/HomePage';
import ContactPage from './containers/ContactPage';
import HumanResourcePage from './containers/HumanResourcePage';
import CertificatePage from './containers/CertificatePage';
import CategoryPage from './containers/CategoryPage';

// Auth pages
import LoginPage from './containers/LoginPage/LoginPage';

const routes = [
  {
    path: '/ana-sayfa',
    name: 'Ana Sayfa',
    component: HomePage,
    layout: '/default',
  },
  {
    path: '/insan-kaynaklari',
    name: 'Insan Kaynakları',
    component: HumanResourcePage,
    layout: '/default',
  },
  {
    path: '/sertifikalar',
    name: 'Sertifikalar',
    component: CertificatePage,
    layout: '/default',
  },
  {
    path: '/kategoriler',
    name: 'Kategoriler',
    component: CategoryPage,
    layout: '/default',
  },
  {
    path: '/iletisim',
    name: 'İletişim',
    component: ContactPage,
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
