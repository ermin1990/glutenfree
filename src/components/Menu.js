import React from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'


import {BiSolidCake} from 'react-icons/bi';
import {MdWoman} from 'react-icons/md';
import {HiClipboardList} from 'react-icons/hi';

function Menu() {
  return (
    <>
    <Logo/>
   <nav className="navbar p-2">
    <ul className="navbar-nav d-flex flex-row gap-2">
        <NavLink to="/" className="nav-link m-0 navMenuItem"><BiSolidCake/> Početna</NavLink>
        <NavLink to="/about" className="nav-link m-0 navMenuItem"><MdWoman/> O meni</NavLink>
        <NavLink to="/order" className="nav-link m-0 navMenuItem disabled text-white"><HiClipboardList/> Narudžbe {/* <span className='badge bg-warning text-dark'>Nije u funkciji</span> */}</NavLink>
    </ul>
    
 
</nav>
</>
  )
}

export default Menu