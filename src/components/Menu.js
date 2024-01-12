import React, { useState } from 'react';
import Logo from '../components/Logo';
import { NavLink } from 'react-router-dom';
import { BiSolidCake } from 'react-icons/bi';
import { MdWoman } from 'react-icons/md';
import { HiClipboardList } from 'react-icons/hi';
import { GiOrangeSlice } from 'react-icons/gi';

function Menu() {


  return (
    <nav className="navbar navbar-expand-xl position-relative">
      <div className="container-fluid">
        <Logo className="d-flex position-absolute" />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end bg-color2 "
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-white d-flex m-auto" id="offcanvasNavbarLabel">
              <Logo className="align-items-md-center" />
            </h5>
            <button
              type="button"
              className="btn-close text-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto gap-2 d-flex flex-wrap">
              <li className="nav-item catMenu" data-bs-dismiss="offcanvas" >
                <NavLink
                  to="/"
                  className="nav-link"
                >
                  <BiSolidCake className='d-inlineblock d-lg-none' /> Početna
                </NavLink>
              </li>
              <li className="nav-item catMenu" data-bs-dismiss="offcanvas">
                <NavLink
                  to="/howtocut"
                  className="nav-link"
                >
                  <GiOrangeSlice className='d-inlineblock d-lg-none' /> Kako sjeći tortu
                </NavLink>
              </li>
              <li className="nav-item catMenu" data-bs-dismiss="offcanvas">
                <NavLink
                  to="/about"
                  className="nav-link"
                >
                  <MdWoman className='d-inlineblock d-lg-none' />  O meni
                </NavLink>
              </li>
              <li className="nav-item catMenu" data-bs-dismiss="offcanvas">
                <NavLink
                  to="/info"
                  className="nav-link"
                >
                  <HiClipboardList className='d-inlineblock d-lg-none' /> Važne informacije
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Menu;
