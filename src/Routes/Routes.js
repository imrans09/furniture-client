import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Product from "../Pages/Product/allProduct/allProduct";
import CategoryProduct from "../Pages/Product/categoryProduct/CategoryProduct";
import Booking from "../Pages/Booking/Booking";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://furniture-mu.vercel.app/home-products"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Product />,
        loader: () => fetch("https://furniture-mu.vercel.app/products"),
      },
      {
        path: "/category-products/:id",
        element: <CategoryProduct />,
        loader: ({ params }) =>
          fetch(`https://furniture-mu.vercel.app/category-products/${params.id}`),
      },
      {
        path: "/booking/:id",
        element: <Booking />,
        loader: ({ params }) =>
          fetch(`https://furniture-mu.vercel.app/booking/${params.id}`),
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
