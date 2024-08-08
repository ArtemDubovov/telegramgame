import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  HashRouter,
  RouterProvider
} from 'react-router-dom';

import './normalize.css';
import './styles/index.css';

import Main from './pages/Main/Main';
import App2 from './pages/App2';
import App3 from './pages/App3';
import App4 from './pages/App4';


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
    element: <App3 />,
  },
  {
    path: "/4",
    element: <App4 />,
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
