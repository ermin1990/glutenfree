import React from "react";
import { Outlet } from "react-router";
import Menu from "./components/Menu";

function App() {

  return (
    <>
    <div className="container">
    <Menu/>
    <Outlet/>
    </div>
    </>
  );
}

export default App;
