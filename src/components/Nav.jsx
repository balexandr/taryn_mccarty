import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'About' },
    { to: '/resume', label: 'Resume' },
    { to: '/ventures', label: 'Ventures' },
    { to: '/press', label: 'Press' },
    { to: '/contact', label: 'Contact' },
  ]

  const externalLinks = [
    { href: 'https://www.linkedin.com/in/tarynmccarty/', label: 'LinkedIn' },
  ]

  return (
    <nav className="nav">
      <NavLink to="/" className="nav-logo">
        Taryn McCarty
      </NavLink>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
              end={to === '/'}
            >
              {label}
            </NavLink>
          </li>
        ))}
        {externalLinks.map(({ href, label }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Nav
