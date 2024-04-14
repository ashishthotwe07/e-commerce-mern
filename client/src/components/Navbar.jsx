import React from "react";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="text-red-500">Navbar</div>

      <Outlet />
    </>
  );
}
