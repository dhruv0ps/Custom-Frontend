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
import SellCar from './features/SellCar/SellCar.tsx';
import BuyCar from './features/BuyCar/BuyCar.tsx';
import DemoPreOwnedCar from './features/Demo-PreOwned/DemoPreOwned.tsx';
import Tradepromotion from './features/TradePromotion/Tradepromotion.tsx';
import VirtualTours from './features/virtual-tours/VirtualTours.tsx';

const stores = { authStore };
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Use MainLayout for routes that need the sidebar
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path:"/sell-your-car",
        element:<SellCar/>
      },
      {
        path:"/buy-your-car",
        element:<BuyCar/>
      },  {
        path:"/demo-pre-owned",
        element:<DemoPreOwnedCar/>
      },{
        path:"/trade-promotion",
        element:<Tradepromotion/>
      },{
        path:"/virtual-tours",
        element:<VirtualTours/>
      }
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
