import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'mobx-react';
import { authStore } from './store/authStore.ts';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Home from './layout/Home.tsx';
import Dashboard from './features/Dashboard/Dashboard.tsx';
import { ToastContainer } from 'react-toastify';
import B2BHomePage from './features/B2BHomePage/B2BHomePage';
import ProductList from './features/B2BStore/ProductList';
import ProductDetail from './features/B2BStore/ProductDetail';
import AboutUs from './features/B2BStore/AboutUs';
import Contact from './features/B2BStore/Contact';

const stores = { authStore };
const router = createBrowserRouter([
  {
    path: "/",
    element: <B2BHomePage />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/dashboard",
    element: <Home />, // Use MainLayout for routes that need the sidebar
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "home",
        element: <Dashboard />,
      },
    ]
  },
  //NO sidebar or navbar pages
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider {...stores}>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider router={router} />
      </DndProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </Provider>
  </React.StrictMode>,

)
