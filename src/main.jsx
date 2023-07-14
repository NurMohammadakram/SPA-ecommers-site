import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Shop from "./components/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Shop/>
      },
      {
        path: "order",
        element: <div>this is order page</div>
      },
      {
        path: "inventory",
        element: <div>This is inventory page</div>
      },
      {
        path: "login",
        element: <div>This is login page</div>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
