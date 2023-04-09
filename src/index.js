import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import router from './navigation/RouterConfig'
import {
  RouterProvider
} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);
