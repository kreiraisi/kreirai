import { useState, useEffect, useRef } from 'react';
import { useScroll } from '../../hooks/useScroll';
import { useLang } from '../../i18n/LangContext';
import { t } from '../../i18n/translations';
import './Navbar.css';

const LANGS = [
  { code: 'en', flagCode: 'gb', label: 'English' },
  { code: 'sl', flagCode: 'si', label: 'Slovenščina' },
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

function LanguageDropdown() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const current = LANGS.find(l => l.code === lang);

  return (
    <div className="lang-dropdown" ref={ref}>
      <button
        className="lang-btn"
        onClick={() => setOpen(o => !o)}
        aria-label="Select language"
        aria-expanded={open}
      >
        <img className="lang-btn__flag" src={`https://flagcdn.com/20x15/${current.flagCode}.png`} alt={current.label} />
        <span className="lang-btn__code">{current.code.toUpperCase()}</span>
        <svg className={`lang-btn__arrow ${open ? 'open' : ''}`} width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <polyline points="2 3.5 5 6.5 8 3.5"/>
        </svg>
      </button>

      <div className={`lang-panel ${open ? 'open' : ''}`}>
        {LANGS.map(l => (
          <button
            key={l.code}
            className={`lang-option ${lang === l.code ? 'active' : ''}`}
            onClick={() => { setLang(l.code); setOpen(false); }}
          >
            <img className="lang-option__flag" src={`https://flagcdn.com/20x15/${l.flagCode}.png`} alt={l.label} />
            <span className="lang-option__code">{l.code.toUpperCase()}</span>
            <span className="lang-option__label">{l.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Navbar({ theme, toggleTheme }) {
  const { lang } = useLang();
  const nav = t[lang].nav;
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScroll();
  const scrolled = scrollY > 20;

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { label: nav.home,       href: '#home' },
    { label: nav.about,      href: '#about' },
    { label: nav.services,   href: '#services' },
    { label: nav.references, href: '#references' },
  ];

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
            src="/logo-tmp.png"
            alt="kreirAI.si"
          />
          <span className="navbar__brand-name">
            <span className="navbar__brand-kreir">
              {'KREIR'.split('').map((l, i) => <span key={i} className="brand-letter">{l}</span>)}
            </span>
            <span className="navbar__brand-ai">
              {'AI'.split('').map((l, i) => <span key={i} className="brand-letter">{l}</span>)}
            </span>
            <span className="navbar__brand-si">
              {'.si'.split('').map((l, i) => <span key={i} className="brand-letter">{l}</span>)}
            </span>
          </span>
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <LanguageDropdown />

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
