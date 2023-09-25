import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import routes from './routes/routes'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <RouterProvider router={router}>
    <App/>
    </RouterProvider>
  </React.StrictMode>

);