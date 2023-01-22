import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './styles/styles.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { Content } from './components/content';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/:id',
        element: <Content />,
      },
      {
        path: '/*',
        element: <Navigate to={'/1'} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
