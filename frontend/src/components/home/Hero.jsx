import { useRef } from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import { useLang } from '../../i18n/LangContext';
import { t } from '../../i18n/translations';
import './Hero.css';

export default function Hero() {
  const ref = useRef(null);
  const visible = useIntersection(ref, { threshold: 0.15 });
  const { lang } = useLang();
  const h = t[lang].hero;

  return (
    <section className="hero section-padding" id="home" ref={ref}>
      <div className="hero__bg-glow hero__bg-glow--pink" />
      <div className="hero__bg-glow hero__bg-glow--purple" />

      <div className="container hero__grid">
        {/* Left: Text */}
        <div className="hero__text">
          <div className={`section-label anim-fade-up stagger-1 ${visible ? 'visible' : ''}`}>
            {h.label}
          </div>

          <h1 className={`hero__heading anim-fade-up stagger-2 ${visible ? 'visible' : ''}`}>
            {h.heading1}<br />
            <span className="gradient-text">{h.heading2}</span>
          </h1>

          <p className={`hero__subtext anim-fade-up stagger-3 ${visible ? 'visible' : ''}`}>
            {h.subtext}
          </p>

          <div className={`hero__cta anim-fade-up stagger-4 ${visible ? 'visible' : ''}`}>
            <a href="#services" className="btn-primary">
              {h.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#about" className="hero__link">
              {h.ctaLearn}
            </a>
          </div>

          <div className={`hero__stats anim-fade-up stagger-5 ${visible ? 'visible' : ''}`}>
            <div className="hero__stat">
              <span className="hero__stat-num gradient-text">100+</span>
              <span className="hero__stat-label">{h.stat1}</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num gradient-text">50+</span>
              <span className="hero__stat-label">{h.stat2}</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num gradient-text">99%</span>
              <span className="hero__stat-label">{h.stat3}</span>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className={`hero__visual anim-slide-right stagger-2 ${visible ? 'visible' : ''}`}>
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />

          <div className="hero__card hero__card--main glass">
            <div className="hero__card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#g1)" strokeWidth="1.5">
                <defs>
                  <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF2080"/>
                    <stop offset="100%" stopColor="#2D8FFF"/>
                  </linearGradient>
                </defs>
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="hero__card-label">AI Intelligence</span>
            <span className="hero__card-value gradient-text">Active</span>
          </div>

          <div className="hero__card hero__card--secondary glass">
            <div className="hero__card-dot" />
            <span className="hero__card-label">Models Running</span>
            <span className="hero__card-value gradient-text">24/7</span>
          </div>

          <div className="hero__card hero__card--tertiary glass">
            <span className="hero__card-label">Accuracy</span>
            <div className="hero__progress">
              <div className="hero__progress-bar" />
            </div>
            <span className="hero__card-value gradient-text">98.7%</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
