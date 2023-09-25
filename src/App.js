import React from "react";
import { Outlet } from "react-router";

function App() {

  return (
    <>
    <div className="logo"><img src="./logo.png" alt="" /></div>
    <Outlet/>
    </>
  );
}

export default App;
