import { useRef } from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import { useLang } from '../../i18n/LangContext';
import { t } from '../../i18n/translations';
import ServicesGraph from './ServicesGraph';
import { servicesData } from '../../data/servicesData';
import './Services.css';

export default function Services() {
  const ref = useRef(null);
  const visible = useIntersection(ref, { threshold: 0.1 });
  const { lang } = useLang();
  const s = t[lang].services;

  const items = servicesData.map((svc, i) => ({ ...svc, ...s.items[i] }));

  return (
    <section className="services section-padding" id="services" ref={ref}>
      <div className="container">
        <div className={`services__header anim-fade-up ${visible ? 'visible' : ''}`}>
          <div className="section-label">{s.label}</div>
          <h2 className="services__heading">
            {s.heading1} <span className="gradient-text">{s.heading2}</span>
          </h2>
          <p className="services__subtext">{s.subtext}</p>
        </div>

        {/* Desktop: circular graph */}
        <div className={`services__graph-wrap anim-scale-in ${visible ? 'visible' : ''}`}>
          <ServicesGraph data={items} />
        </div>

        {/* Mobile: card grid */}
        <div className="services__cards">
          {items.map((svc, i) => (
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
