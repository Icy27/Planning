import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { Home, Contact, Products, Timer } from "./pages";

const router = createBrowserRouter([
  {
    path: "/Planning/",
    element: <App />,
    children: [
      {
        path: "/Planning/", // Default route for /Planning
        element: <Navigate to="/Planning/home" replace />,
      },
      {
        path: "/Planning/home",
        element: <Home />,
      },
      {
        path: "/Planning/products",
        element: <Products />,
      },
      {
        path: "/Planning/contact",
        element: <Contact />,
      },
      {
        path: "/Planning/timer",
        element: <Timer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
