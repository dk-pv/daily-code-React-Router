import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";



const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement :<ErrorPage /> ,
    children: [
      { path: "", element: <Home /> },

      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetails /> },

      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
