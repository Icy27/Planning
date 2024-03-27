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
    path: "/Planning/",
    element: <App />,
    children: [
      {
        path: "/Planning/",
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
