import { useRef } from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import './References.css';

const referencesData = [
  {
    id: 1,
    title: 'NexaBank AI Assistant',
    category: 'Finance',
    desc: 'Deployed a conversational AI reducing support ticket volume by 62% within the first quarter.',
    gradient: 'linear-gradient(135deg, #FF2080 0%, #9B2FFF 100%)',
  },
  {
    id: 2,
    title: 'LogiFlow Automation',
    category: 'Logistics',
    desc: 'Built intelligent route-optimization and demand-forecasting pipelines for a 150-vehicle fleet.',
    gradient: 'linear-gradient(135deg, #9B2FFF 0%, #2D8FFF 100%)',
  },
  {
    id: 3,
    title: 'MedCore Data Platform',
    category: 'Healthcare',
    desc: 'Engineered a HIPAA-compliant analytics layer enabling real-time clinical insights from 10M+ records.',
    gradient: 'linear-gradient(135deg, #2D8FFF 0%, #22c55e 100%)',
  },
  {
    id: 4,
    title: 'RetailSense Engine',
    category: 'E-Commerce',
    desc: 'Personalization ML model increasing average order value by 28% through behavioural pattern matching.',
    gradient: 'linear-gradient(135deg, #FF2080 0%, #2D8FFF 100%)',
  },
  {
    id: 5,
    title: 'EduBot Learning Suite',
    category: 'EdTech',
    desc: 'An adaptive AI tutor serving 40,000 students with personalized lesson pacing and feedback.',
    gradient: 'linear-gradient(135deg, #9B2FFF 0%, #FF2080 100%)',
  },
  {
    id: 6,
    title: 'Sentinel Security AI',
    category: 'Cybersecurity',
    desc: 'Real-time anomaly detection model identifying threats with 99.4% precision at enterprise scale.',
    gradient: 'linear-gradient(135deg, #2D8FFF 0%, #9B2FFF 100%)',
  },
];

export default function References() {
  const ref = useRef(null);
  const visible = useIntersection(ref, { threshold: 0.1 });

  return (
    <section className="references section-padding" id="references" ref={ref}>
      <div className="container">
        <div className={`references__header anim-fade-up ${visible ? 'visible' : ''}`}>
          <div className="section-label">Our Work</div>
          <h2 className="references__heading">
            Featured <span className="gradient-text">References</span>
          </h2>
          <p className="references__subtext">
            Real-world solutions we've built — across industries, at scale.
          </p>
        </div>

        <div className="references__grid">
          {referencesData.map((ref, i) => (
            <article
              key={ref.id}
              className={`ref-card anim-scale-in stagger-${Math.min(i + 1, 6)} ${visible ? 'visible' : ''}`}
            >
              <div className="ref-card__thumb" style={{ background: ref.gradient }}>
                <span className="ref-card__cat">{ref.category}</span>
              </div>
              <div className="ref-card__body">
                <h3 className="ref-card__title">{ref.title}</h3>
                <p className="ref-card__desc">{ref.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
