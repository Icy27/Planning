import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Contact } from "./pages/Contact.tsx";
import { Products } from "./pages/Products.tsx";

const router = createBrowserRouter([
  {
    path: "/planning/",
    element: <App />,
    children: [
      {
        path: "/planning/",
        element: <Home />,
      },
      {
        path: "/planning/products",
        element: <Products />,
      },
      {
        path: "/planning/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
