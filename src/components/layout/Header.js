import React from 'react'
import { NavLink } from 'react-router-dom'

const getNavLinkClass = ({ isActive }) => isActive ? 'active' : '';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/logo.png" alt="Logo" className="logo-image" />
      </div>

      <nav className="header-nav">
        <ul>
          <li><NavLink to="/" className={getNavLinkClass}>Home</NavLink></li>
          <li><NavLink to="/projects" className={getNavLinkClass}>Projects</NavLink></li>
          <li><NavLink to="/about" className={getNavLinkClass}>About</NavLink></li>
          <li><NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink></li>
          <li><NavLink to="/skills" className={getNavLinkClass}>Skills</NavLink></li>
        </ul>
      </nav>
        <hr />

    </header>
  )
}
