import { RouteObject } from 'react-router-dom';
import ShopPage from '../modules/shop/pages/ShopPage';
import LoginPage from '../modules/auth/pages/LoginPage';

const routes: RouteObject[] = [
  { path: "/", element: <ShopPage /> },
  { path: "/login", element: <LoginPage /> },
];

export default routes;
