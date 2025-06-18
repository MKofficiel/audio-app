import React from "react";
import HomePage from "../features/home/HomePage";
import { Outlet } from "react-router";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
