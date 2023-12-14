import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route.jsx";
import Favicon from "react-favicon";
import AuthProvider from "./Provider/AuthProvider.jsx";

<Favicon url="https://i.ibb.co/WG7cJ1q/favicon.png"></Favicon>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
