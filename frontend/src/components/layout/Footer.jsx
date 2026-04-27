import { useLang } from '../../i18n/LangContext';
import { t } from '../../i18n/translations';
import './Footer.css';

const navHrefs = ['#home', '#about', '#services', '#references'];

export default function Footer() {
  const { lang } = useLang();
  const nav = t[lang].nav;
  const f = t[lang].footer;

  const navLinks = [
    { label: nav.home,       href: navHrefs[0] },
    { label: nav.about,      href: navHrefs[1] },
    { label: nav.services,   href: navHrefs[2] },
    { label: nav.references, href: navHrefs[3] },
  ];

  return (
    <footer className="footer">
      <div className="footer__top-line" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo-link">
            <img className="footer__logo-img" src="/darklogo.png" alt="Kresai" />
          </a>
          <p className="footer__tagline">{f.tagline}</p>
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
          &copy; {new Date().getFullYear()} {f.copyright}
        </span>
        <span className="footer__built gradient-text">
          {f.builtWith}
        </span>
      </div>
    </footer>
  );
}
