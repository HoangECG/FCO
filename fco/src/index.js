import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Backend from './pages/Backend';
import reportWebVitals from './reportWebVitals';
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import TestLayout from "./pages/TestLayout/TestLayout"
import Control from "./pages/Control/Control"
import Banpick from "./pages/banpick/Banpick"
import Output1 from "./pages/Layout"
import VmixApi from "./pages/VmixApi/VmixApi"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Backend/>
  },
  {
    path: "/Banpick",
    element: <Banpick/>
  },
  {
    path: "/testlayout",
    element: <TestLayout/>
  },
  {
    path: "/output1",
    element: <Output1/>
  },
  {
    path: "/output2",
    element: <Output1/>
  },
  {
    path: "/vmixapi",
    element: <VmixApi/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
