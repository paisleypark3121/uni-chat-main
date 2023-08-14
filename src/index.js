import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Chat } from './Message/chat';
import { TextUploader } from './Admin/admin';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat/>
  },
  {
    path: "/admin",
    element: <TextUploader/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);