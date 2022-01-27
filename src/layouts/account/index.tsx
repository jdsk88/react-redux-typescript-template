import React from "react";
import { Link, Outlet } from "react-router-dom";

const AccountLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <Outlet />
      <button>
        <Link to="/">Back</Link>
      </button>
    </>
  );
};

export default AccountLayout;
