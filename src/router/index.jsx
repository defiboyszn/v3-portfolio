import {
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "../pages";
import { About } from "../pages/about";
import { Blog } from "../pages/blog";
import { Community } from "../pages/community";
import { Interview } from "../pages/interview";
import { Portfolio } from "../pages/portfolio";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: []
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/interview",
    element: <Interview />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);