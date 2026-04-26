import { useRef } from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import './About.css';

const highlights = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: '100+ AI Projects Delivered',
    desc: 'From prototype to production across industries worldwide.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Enterprise-Grade Infrastructure',
    desc: 'Built for scale, security, and reliability at every layer.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    title: 'Fully Custom Solutions',
    desc: 'No cookie-cutter templates — built precisely for your needs.',
  },
];

export default function About() {
  const ref = useRef(null);
  const visible = useIntersection(ref, { threshold: 0.15 });

  return (
    <section className="about section-padding" id="about" ref={ref}>
      <div className="container about__grid">
        {/* Left visual */}
        <div className={`about__visual anim-slide-left ${visible ? 'visible' : ''}`}>
          <div className="about__visual-card gradient-border">
            <div className="about__visual-inner">
              <div className="about__orb about__orb--1" />
              <div className="about__orb about__orb--2" />
              <div className="about__logo-wrap">
                <div className="about__logo-k">
                  <img src="/darklogo.png" style={{ width: 86, height: 86, objectFit: 'contain' }} alt="Kresai" />
                </div>
                <span className="about__logo-text">
                  KREIR&nbsp;<span className="about__logo-ai">AI</span>
                </span>
              </div>
              <div className="about__badge about__badge--1 glass">
                <span className="about__badge-val gradient-text">5+</span>
                <span className="about__badge-label">Years</span>
              </div>
              <div className="about__badge about__badge--2 glass">
                <span className="about__badge-val gradient-text">50+</span>
                <span className="about__badge-label">Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right text */}
        <div className="about__content">
          <div className={`section-label anim-fade-up stagger-1 ${visible ? 'visible' : ''}`}>
            Who We Are
          </div>

          <h2 className={`about__heading anim-fade-up stagger-2 ${visible ? 'visible' : ''}`}>
            Precision AI for<br/>
            <span className="gradient-text">Modern Business</span>
          </h2>

          <p className={`about__desc anim-fade-up stagger-3 ${visible ? 'visible' : ''}`}>
            Kresai is a digital intelligence studio specializing in custom AI systems,
            automation, and data-driven solutions. We partner with forward-thinking
            companies to turn complexity into clarity — and data into decisions.
          </p>

          <div className="about__highlights">
            {highlights.map((h, i) => (
              <div
                key={i}
                className={`about__highlight anim-fade-up stagger-${i + 3} ${visible ? 'visible' : ''}`}
              >
                <div className="about__highlight-icon">{h.icon}</div>
                <div>
                  <div className="about__highlight-title">{h.title}</div>
                  <div className="about__highlight-desc">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
