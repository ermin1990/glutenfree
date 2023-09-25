import React from "react";
import { Outlet } from "react-router";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

function App() {

  return (
    <>
    <Logo/>
    <Menu/>
    <Outlet/>
    </>
  );
}

export default App;
