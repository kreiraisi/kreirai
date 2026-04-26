import './Footer.css';

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'References', href: '#references' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-line" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo-link">
            <img className="footer__logo-img" src="/darklogo.png" alt="Kresai" />
          </a>
          <p className="footer__tagline">
            Intelligence, engineered for growth.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container footer__bottom">
        <span className="footer__copy">
          &copy; {new Date().getFullYear()} Kresai Intelligence. All rights reserved.
        </span>
        <span className="footer__built gradient-text">
          Built with AI &amp; precision
        </span>
      </div>
    </footer>
  );
}
