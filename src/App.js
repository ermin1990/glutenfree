/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { setData } from './actions';
import { useDispatch} from "react-redux";
import Logo from "./components/Logo";



function App() {

  const apiAllCat = "https://script.google.com/macros/s/AKfycbzO5RKeoCcIdDFdOBhYZohAMD5EyxOcYezU5y56GIUE0cmG0kcyVYOcl-KGxQk2t9wJ8A/exec";

  const dispatch = useDispatch();
  useEffect(() => {
    // Ovdje možete učitati podatke i ažurirati Redux stanje
    const fetchData = async () => {
      try {
        const response = await fetch(apiAllCat);
        const newData = await response.json();
        dispatch(setData(newData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <div className="container col-md-6">
        <Logo/>
        <Menu />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
