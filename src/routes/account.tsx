import { Navigate } from "react-router-dom";
import AccountLayout from "../layouts/account";

const account = {
  path: "account",
  element: <AccountLayout />,
  children: [
    { path: "*", element: <Navigate to="/404" /> },
    { path: ":id", element: <h1>id</h1> },
    { path: "add", element: <h1>add</h1> },
    { path: "list", element: <h1>list</h1> },
  ],
};
export default account;
