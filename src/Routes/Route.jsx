import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SingUp/SignUp";
import Profile from "../Pages/Shared/Navbar/Profile";
import PageNotFound from "../Pages/Components/PageNotFound/PageNotFound";
import AddItem from "../Pages/Components/CreateNew/AddItem";
import Chef from "../Pages/Chef's/Chef";
import Offer from "../Pages/Offer/Offer";
import Blogs from "../Pages/Blogs/Blogs";
import ChefRecipe from "../Pages/Home/ExpertiesChef/ChefRecipe";
import AllItems from "../Pages/Components/CreateNew/AllItems";
import UpdateItem from "../Pages/Components/CreateNew/UpdateItem";
import ByteMenu from "../Pages/ByteMenu/ByteMenu";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

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
        path: "recipes",
        element: <Offer />,
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
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
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
        path: "addItems",
        element: <AddItem />,
      },
      {
        path: "allItems",
        element: <AllItems />,
        loader: () => fetch("http://localhost:5000/items"),
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
]);

export default router;
