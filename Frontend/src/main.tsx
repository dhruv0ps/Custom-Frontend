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
import MateRateDiscount from './features/mates-rates-discounts/MateRateDiscount.tsx';
import Membership from './features/Membership/Membership.tsx';
import Finance from './features/Finance/Finance.tsx';
import Insurance from './features/Insurance/Insurance.tsx';
import Fleet from './features/Fleet/Fleet.tsx';
import Overhauled from './features/overhauled-2/Overhauled.tsx';
import Fundraisers from './features/Fundraiser/Fundraisers.tsx';
import Prizedrawwinners from './features/prize-draw-winners/Prizedrawwinners.tsx';
import Businesspartners from './features/Business-Partner/Businesspartners.tsx';
import ContactUs from './features/Legal/ContactUs.tsx';
import TermsAndConditions from './features/Legal/Terms&Condition.tsx';
import PrivacyPolicy from './features/Legal/PrivacyPolicy.tsx';
import FAQsPage from './features/Legal/FAQsPages.tsx';
import Periodictradepromotiondraws from './features/Legal/Periodictradepromotiondraws.tsx';
import AboutUs from './features/Legal/AboutUs.tsx';

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
      },{
        path:"/mates-rates-discounts",
        element:<MateRateDiscount/>
      },{
        path:"/membership",
        element :<Membership/>
      },{
        path:"/finance",
        element:<Finance/>

      },{
        path:"/insurance",
        element  : <Insurance/>
      },{
        path:"/fleet",
        element: <Fleet/>
      },{
        path:"/overhauled",
        element:<Overhauled/>
      },{
        path:"/fundraisers",
        element:<Fundraisers/>
      },{
        path:"/prize-draw-winners",
        element:<Prizedrawwinners/>
      },{
        path:"/business-partners",
        element :<Businesspartners/>
      },{
        path:"/contact-us",
        element :<ContactUs/>
      },{
        path:"/terms-and-conditions",
        element :<TermsAndConditions/>
      },{
        path : "/privacy-policy-2",
        element :<PrivacyPolicy/>
      },{
        path: "/general-faqs",
        element :<FAQsPage/>
      },{
        path :"/periodic-trade-promotion-draws",
        element :<Periodictradepromotiondraws/>
      },{
        path:"/about-us",
        element:<AboutUs/>
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
