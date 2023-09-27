/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Outlet } from "react-router";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <div className="container col-md-6">
    <Menu/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
