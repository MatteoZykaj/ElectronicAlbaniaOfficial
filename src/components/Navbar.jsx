import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap, Search } from 'lucide-react'
import SearchBar from './SearchBar'
import './Navbar.css'

const links = [
  { label: 'Shërbimet', to: '/sherbimet' },
  { label: 'Produktet', to: '/produktet' },
  { label: 'Galeri',    to: '/galeri'    },
  { label: 'Kontakt',   to: '/kontakt'   },
]

export default function Navbar() {
  const [open, setOpen]           = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const location = useLocation()

  // ✅ Fixed: was useState() before — now correctly useEffect()
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [location])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <Link to="/" className="navbar__logo">
          <Zap size={20} />
          <span>Electronic <strong>Albania</strong></span>
        </Link>

        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={location.pathname === l.to ? 'navbar__link--active' : ''}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="navbar__icon-btn" onClick={() => setShowSearch(true)} aria-label="Search">
            <Search size={18} />
          </button>

          <a href="https://wa.me/355676749350" target="_blank" rel="noreferrer" className="navbar__cta">
            WhatsApp 💬
          </a>
        </div>

        <button
          className="navbar__burger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {open && (
          <div className="navbar__mobile">
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/355676749350"
              target="_blank"
              rel="noreferrer"
              className="navbar__mobile-cta"
            >
              WhatsApp 💬
            </a>
          </div>
        )}
      </nav>

      {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}
    </>
  )
}
