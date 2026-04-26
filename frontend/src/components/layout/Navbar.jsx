import { useState, useEffect } from 'react';
import { useScroll } from '../../hooks/useScroll';
import './Navbar.css';

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'References', href: '#references' },
];

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScroll();
  const scrolled = scrollY > 20;

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <img
            className="navbar__logo"
            src={theme === 'dark' ? '/darklogo.png' : '/lightlogo.png'}
            alt="Kresai"
          />
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className={`navbar__hamburger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__mobile ${isOpen ? 'open' : ''}`}>
        <nav className="navbar__mobile-nav">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
