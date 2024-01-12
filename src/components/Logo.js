import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo() {
  return (
    <>
    <NavLink to="/">
    <div className="text-center mt-2"><img className="logo" src="https://raw.githubusercontent.com/ermin1990/glutenfree/master/public/logo.png" alt="" /></div>
    </NavLink>
    </>
  )
}

export default Logo