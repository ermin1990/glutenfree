import React from 'react'
import Logo from './Logo'

function Menu() {
  return (
    <>
    <Logo/>
   <nav className="navbar p-2">
  
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 d-flex flex-row gap-2">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="about">O meni</a>
      </li>
    </ul>
 
</nav>
</>
  )
}

export default Menu