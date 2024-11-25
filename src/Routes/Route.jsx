import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import About from "../Compoment/About/About";
const router = createBrowserRouter([
    {
      path: "/",
      element:<App />,
      children:[
        {
          path:"/",
          element:<About />

      }
    ]
    },
  ]);
const Route = () => {
  return (
    <div>
        <RouterProvider router={router} />
      
    </div>
  )
}

export default Route
