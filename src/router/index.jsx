import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Users from "../pages/Users.jsx";
import UserDetails from "../pages/UserDetails.jsx";
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
      },
      {
        path: '/users/:id',
        element: <UserDetails/>
      }
    ],
  },
]);

export default router