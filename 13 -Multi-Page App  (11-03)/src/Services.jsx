import React from 'react';
import './Services.css';

const SERVICES = [
  {
    icon: '🎨',
    title: 'Brand Identity',
    description: 'We craft unique visual identities that tell your story and resonate with your audience.'
  },
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Cutting-edge websites built with performance, security, and scalability in mind.'
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Bespoke mobile experiences that users love, for both iOS and Android platforms.'
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    description: 'Strategic campaigns that grow your presence and drive measurable results.'
  },
  {
    icon: '🔍',
    title: 'SEO Strategy',
    description: 'Optimizing your digital footprint to ensure you rank where it matters most.'
  },
  {
    icon: '🧠',
    title: 'UI/UX Design',
    description: 'User-centric design that balances beauty with intuitive functionality.'
  }
];

export default function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h2 className="section-subtitle">Our Expertise</h2>
          <h1 className="section-title">Solutions we <span className="title-accent">Provide.</span></h1>
        </div>
      </section>

      <section className="services-grid-section container">
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-dots"><span></span><span></span><span></span></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
