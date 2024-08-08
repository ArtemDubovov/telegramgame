import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

import './normalize.css';
import './styles/index.css';

import Main from './pages/Main/Main';
import App2 from './pages/App2';
import Games from './pages/Games/Games';
import App4 from './pages/App4';

import ComeUpWithItBrandName from './pages/Games/ComeUpWithItBrandName/ComeUpWithItBrandName';


const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/2",
    element: <App2 />,
  },
  {
    path: "/3",
    element: <Games />,
  },
  {
    path: "/4",
    element: <App4 />,
  },
  {
    path: "/ComeUpWithItBrandName",
    element: <ComeUpWithItBrandName />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
