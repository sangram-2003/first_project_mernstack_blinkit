import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Category from "./pages/Category.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "category/:categorySlug", // ✅ FIXED
        element: <Category />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
