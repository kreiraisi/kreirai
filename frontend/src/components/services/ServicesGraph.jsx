import { useState } from 'react';
import './ServicesGraph.css';

const SIZE = 500;
const CENTER = SIZE / 2;
const RADIUS = 185;

function toRad(deg) {
  return (deg * Math.PI) / 180;
}

function nodePos(angle) {
  const rad = toRad(angle);
  return {
    x: CENTER + RADIUS * Math.cos(rad),
    y: CENTER + RADIUS * Math.sin(rad),
  };
}

const ServiceIcons = {
  1: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="4" y="4" width="6" height="6" rx="1"/>
      <rect x="14" y="4" width="6" height="6" rx="1"/>
      <rect x="4" y="14" width="6" height="6" rx="1"/>
      <path d="M14 17h6M17 14v6"/>
    </svg>
  ),
  2: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  3: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  4: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6"  y1="20" x2="6"  y2="14"/>
    </svg>
  ),
  5: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
  6: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.44-4.14Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 18.5 2Z"/>
    </svg>
  ),
};

export default function ServicesGraph({ data: servicesData }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="sgraph">
      <svg
        className="sgraph__svg"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF2080" stopOpacity="0.6"/>
            <stop offset="50%" stopColor="#9B2FFF" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#2D8FFF" stopOpacity="0.6"/>
          </linearGradient>
          <linearGradient id="lineGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF2080"/>
            <stop offset="50%" stopColor="#9B2FFF"/>
            <stop offset="100%" stopColor="#2D8FFF"/>
          </linearGradient>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9B2FFF" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#9B2FFF" stopOpacity="0"/>
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Outer orbit ring */}
        <circle
          cx={CENTER} cy={CENTER} r={RADIUS}
          fill="none"
          stroke="rgba(155,47,255,0.1)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Connection lines */}
        {servicesData.map(svc => {
          const pos = nodePos(svc.angle);
          const isActive = hovered === svc.id;
          return (
            <line
              key={svc.id}
              x1={CENTER} y1={CENTER}
              x2={pos.x} y2={pos.y}
              stroke={isActive ? 'url(#lineGradActive)' : 'url(#lineGrad)'}
              strokeWidth={isActive ? 2 : 1}
              strokeOpacity={isActive ? 1 : 0.5}
              className="sgraph__line"
            />
          );
        })}

        {/* Center glow bg */}
        <circle cx={CENTER} cy={CENTER} r={80} fill="url(#centerGlow)" />
      </svg>

      {/* Center node */}
      <div className="sgraph__center">
        <div className="sgraph__center-inner">
          <img src="/darklogo.png" className="sgraph__center-logo" alt="Kresai" />
        </div>
      </div>

      {/* Service nodes */}
      {servicesData.map(svc => {
        const pos = nodePos(svc.angle);
        const isActive = hovered === svc.id;
        const pctX = (pos.x / SIZE) * 100;
        const pctY = (pos.y / SIZE) * 100;

        return (
          <div
            key={svc.id}
            className={`sgraph__node ${isActive ? 'active' : ''}`}
            style={{ left: `${pctX}%`, top: `${pctY}%` }}
            onMouseEnter={() => setHovered(svc.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="sgraph__node-icon">
              {ServiceIcons[svc.id]}
            </div>
            <span className="sgraph__node-title">{svc.title}</span>
            {isActive && (
              <div className="sgraph__node-tooltip">
                {svc.desc}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
