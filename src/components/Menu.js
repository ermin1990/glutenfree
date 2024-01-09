import React from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

import { BiSolidCake } from 'react-icons/bi';
import { MdWoman } from 'react-icons/md';
import { HiClipboardList } from 'react-icons/hi';
import { GiOrangeSlice } from 'react-icons/gi';

function Menu() {
  return (
    <>
      <Logo />
      <div className="categoryMenu d-flex flex-row overflow-x-scroll">
          
            <NavLink to="/" className="nav-link navMenuItem d-flex">
              <span>
                <BiSolidCake />
              </span>{' '}
              Početna
            </NavLink>
          
          
            <NavLink to="/howtocut" className="nav-link navMenuItem d-flex">
              <span>
                <GiOrangeSlice />
              </span>{' '}
              Kako sjeći visoku tortu
            </NavLink>

            <NavLink to="/info" className="nav-link navMenuItem d-flex">
              <span>
                <HiClipboardList />
              </span>{' '}
              Važne informacije
            </NavLink>
          
            <NavLink to="/about" className="nav-link navMenuItem d-flex">
              <span>
                <MdWoman />
              </span>{' '}
              O meni
            </NavLink>
         
         
            
        
      </div>
    </>
  );
}

export default Menu;
