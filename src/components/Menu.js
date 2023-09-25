import React from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'


import {BiSolidCake} from 'react-icons/bi';
import {MdWoman} from 'react-icons/md';

function Menu() {
  return (
    <>
    <Logo/>
   <nav className="navbar p-2">
  
    <ul className="navbar-nav d-flex flex-row gap-2">
        <NavLink to="/" className="nav-link m-0 navMenuItem"><BiSolidCake/> Početna</NavLink>
        <NavLink to="/about" className="nav-link m-0 navMenuItem"><MdWoman/> O meni</NavLink>
    </ul>
    
 
</nav>
</>
  )
}

export default Menu