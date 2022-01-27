import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/main";

const main = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "*", element: <Navigate to="/404" /> },
    { path: "/", element: <h1>main routes</h1> },
    { path: "404", element: <h1>page not found</h1> },
    { path: "account", element: <Navigate to="/account/list" /> },
  ],
};

export default main;
