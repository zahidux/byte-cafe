import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SingUp/SignUp";
import Profile from "../Pages/Shared/Navbar/Profile";
import PageNotFound from "../Pages/Components/PageNotFound/PageNotFound";
import Chef from "../Pages/Chef's/Chef";
import Blogs from "../Pages/Blogs/Blogs";
import ChefRecipe from "../Pages/Home/ExpertiesChef/ChefRecipe";
import UpdateItem from "../Pages/Dashboard/UpdateItem";
import ByteMenu from "../Pages/ByteMenu/ByteMenu";
import PrivateRoute from "./PrivateRoute";
import Order from "../Pages/Order/Order";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllItems from "../Pages/Dashboard/AllItems";
import AddItem from "../Pages/Dashboard/AddItem";
import MyCart from "../Pages/Dashboard/MyCart";
import UserCart from "../Pages/Dashboard/UserCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "all-chef",
        element: <Chef />,
      },
      {
        path: "chef/:id",
        element: (
          <PrivateRoute>
            <ChefRecipe />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
      {
        path: "menu",
        element: <ByteMenu />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "profile",
        element: <Profile />,
      },

      {
        path: "order/:category",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },

      {
        path: "update/:id",
        element: <UpdateItem />,
        loader: ({ params }) =>
          fetch(`https://localhost:5000/items/${params.id}`),
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "addItems",
        element: <AddItem />,
      },
      {
        path: "allItems",
        element: <AllItems />,
        loader: () => fetch("http://localhost:5000/items"),
      },
      {
        path: "cart",
        element: <MyCart />,
      },
      {
        path: "users",
        element: <UserCart />,
      },
    ],
  },
]);

export default router;
