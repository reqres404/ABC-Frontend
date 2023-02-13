import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {CgMenuRight as Hamburger} from 'react-icons/cg'
import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h1><a href='/'>ABC</a></h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger  style={{color:"white"}}/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li className="nav-links">
            <a href='/'>Home</a>
            <a href='#services'>Services</a>
            <a href='#about'>About</a>
            <a href='#project'>Projects</a>
            </li>
            <li>
            <NavLink className="nav-CTA" to="/Contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar