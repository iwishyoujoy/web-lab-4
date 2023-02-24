import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';

import LoginPage from "./routes/LoginPage";
import MainPage from "./routes/MainPage";
import NotFoundPage from "./routes/NotFoundPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <LoginPage />
        },
        {
            path: "/mainpage",
            element: <MainPage />
        },
        {
            path: "/*",
            element: <NotFoundPage />
        }
    ],
    {
        basename: process.env.PUBLIC_URL
    }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);

