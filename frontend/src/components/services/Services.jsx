import { useRef } from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import ServicesGraph from './ServicesGraph';
import { servicesData } from '../../data/servicesData';
import './Services.css';

export default function Services() {
  const ref = useRef(null);
  const visible = useIntersection(ref, { threshold: 0.1 });

  return (
    <section className="services section-padding" id="services" ref={ref}>
      <div className="container">
        <div className={`services__header anim-fade-up ${visible ? 'visible' : ''}`}>
          <div className="section-label">What We Offer</div>
          <h2 className="services__heading">
            Core <span className="gradient-text">AI Services</span>
          </h2>
          <p className="services__subtext">
            A full spectrum of intelligent solutions — engineered to integrate,
            scale, and deliver measurable results.
          </p>
        </div>

        {/* Desktop: circular graph */}
        <div className={`services__graph-wrap anim-scale-in ${visible ? 'visible' : ''}`}>
          <ServicesGraph />
        </div>

        {/* Mobile: card grid */}
        <div className="services__cards">
          {servicesData.map((svc, i) => (
            <div
              key={svc.id}
              className={`services__card anim-scale-in stagger-${Math.min(i + 1, 6)} ${visible ? 'visible' : ''}`}
            >
              <div className="services__card-inner gradient-border">
                <div className="services__card-body">
                  <div className="services__card-num gradient-text">{String(svc.id).padStart(2, '0')}</div>
                  <h3 className="services__card-title">{svc.title}</h3>
                  <p className="services__card-desc">{svc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
