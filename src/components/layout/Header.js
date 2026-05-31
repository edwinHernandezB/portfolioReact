import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/logo.png" alt="Logo" className="logo-image" />
      </div>

      <nav className="header-nav">
        <ul>
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/projects">Projects</NavLink></li>
          <li><NavLink>About</NavLink></li>
          <li><NavLink href="/contact">Contact</NavLink></li>
          <li><NavLink href="/skills">Skills</NavLink></li>
        </ul>
      </nav>
        <hr />

    </header>
  )
}
