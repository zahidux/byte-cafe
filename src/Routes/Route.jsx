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
import ByteMenu from "../Pages/ByteMenu/ByteMenu";
import PrivateRoute from "./PrivateRoute";
import Order from "../Pages/Order/Order";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddItem from "../Pages/Dashboard/AddItem";
import MyCart from "../Pages/Dashboard/MyCart";
import UserCart from "../Pages/Dashboard/UserCart";
import NewItems from "../Pages/Dashboard/newItems";
import Pay from "../Pages/Dashboard/Pay";
import UserHome from "../Pages/Dashboard/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome";
import UpdateItem from "../Pages/Dashboard/UpdateItem";

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
          fetch(`https://byte-cafe.onrender.com/chef/${params.id}`),
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
        path: "/update/:id",
        element: <UpdateItem />,
        loader: ({ params }) =>
          fetch(`https://byte-cafe.onrender.com/items/${params.id}`),
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
        path: "userhome",
        element: <UserHome />,
      },

      {
        path: "cart",
        element: <MyCart />,
      },
      {
        path: "pay",
        element: <Pay />,
      },

      //admin route
      {
        path: "adminhome",
        element: <AdminHome />,
      },
      {
        path: "addItems",
        element: <AddItem />,
      },
      {
        path: "newitems",
        element: <NewItems />,
      },

      {
        path: "users",
        element: <UserCart />,
      },
    ],
  },
]);

export default router;
