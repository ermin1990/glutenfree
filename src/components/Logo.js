import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo() {
  return (
    <div className="text-center mt-2"><NavLink to="/"><img className="logo" src="https://raw.githubusercontent.com/ermin1990/glutenfree/master/public/logo.png" alt="" /></NavLink></div>
  )
}

export default Logo