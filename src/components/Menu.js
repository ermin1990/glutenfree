import React from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <>
    <Logo/>
   <nav className="navbar p-2">
  
    <ul className="navbar-nav d-flex flex-row gap-2">
        <NavLink to="/" className="nav-link m-0 navMenuItem">Početna</NavLink>
        <NavLink to="/about" className="nav-link m-0 navMenuItem">O meni</NavLink>
      
    </ul>
 
</nav>
</>
  )
}

export default Menu