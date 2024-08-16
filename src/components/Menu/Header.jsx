import React from "react";
import { MenuBar } from "../index";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <MenuBar />
      <div className="relative">
        <Outlet />
      </div>
    </>
  );
};

export { Header };
