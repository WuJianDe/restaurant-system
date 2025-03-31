import { RouteObject } from "react-router-dom";
import ShopPage from "../modules/shop/pages/ShopPage";
import LoginPage from "../modules/auth/pages/LoginPage";
import ProfilePage from "../modules/user/pages/ProfilePage";
import OrderRecordPage from "../modules/user/pages/OrderRecordPage";
import UserLayoutPage from "../modules/user/pages/UserLayoutPage";
import CheckoutPage from "../modules/checkout/pages/CheckoutPage";

const routes: RouteObject[] = [
  { path: "/", element: <ShopPage /> },
  { path: "/login", element: <LoginPage /> },
  {
    path: "/user",
    element: <UserLayoutPage />,
    children: [
      { path: "profile", element: <ProfilePage /> },
      { path: "order-record", element: <OrderRecordPage /> },
    ],
  },
  { path: "/checkout", element: <CheckoutPage /> },
];

export default routes;
