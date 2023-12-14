import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SingUp/SignUp";
import PageNotFound from "../Pages/Components/PageNotFound/PageNotFound";
import ExpertChef from "../Pages/Home/ExpertiesChef/ExpertiesChef";
import ChefRecipe from "../Pages/Home/ExpertiesChef/ChefRecipe";
import Profile from "../Pages/Shared/Navbar/Profile";
import PrivateRoute from "./PrivateRoute";
import Offer from "../Pages/Offer/Offer";
import Chef from "../Pages/Chef's/Chef";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      //   {
      //     path: '/all-chef',
      //     element: <AllChef />,
      //     loader: () => fetch('https://tasty-salt-server-foridislam332.vercel.app/chef')
      // },
      // {
      //     path: '/chef/:id',
      //     element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
      //     loader: ({ params }) => fetch(`https://tasty-salt-server-foridislam332.vercel.app/chef/${params.id}`)
      // },
      {
        path: "chefs",
        element: <Chef />, // i loaded data by component file with fetch
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
        path: "offer",
        element: <Offer />,
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
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
