import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navStyle.css"

const Navbar = () => {
  return (
    <nav>
        <NavLink className={(e)=>e.isActive?'navActive':''} to="/">Home</NavLink>
        <NavLink className={(e)=>e.isActive?'navActive':''} to="/about">About</NavLink>
        <NavLink className={(e)=>e.isActive?'navActive':''} to="/login">Login</NavLink>
      
    </nav>
  )
}

export default Navbar
