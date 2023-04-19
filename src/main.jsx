import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Products from './Products/Products';
import Home from './Home/Home';
import Orders from './Orders/Orders';
import Inventory from './Inventory/Inventory';
import Login from './Login/Login';
import OrderReview from './OrderReview/OrderReview';
import cartProductsLoader from './loader/cartProductsLoader';
import Checkout from './Checkout/Checkout';
import Signup from './assets/Signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './assets/Auth/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Products></Products>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'order-review',
        element: <OrderReview></OrderReview>
      },
      {
        path: 'manage-inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
