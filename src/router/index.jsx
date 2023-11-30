import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Users from "../pages/Users.jsx";
import Root from "../layout/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: '/users',
        element: <Users />
      }
    ],
  },
]);

export default router