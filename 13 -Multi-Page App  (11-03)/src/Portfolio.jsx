import React from 'react';
import './Portfolio.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Modern Living',
    category: 'Architecture',
    image: '🏠'
  },
  {
    id: 2,
    title: 'Ocean Deep',
    category: 'Branding',
    image: '🌊'
  },
  {
    id: 3,
    title: 'Midnight Sun',
    category: 'Web Design',
    image: '🌞'
  },
  {
    id: 4,
    title: 'Abstract Thoughts',
    category: 'Creative Art',
    image: '🎨'
  },
  {
    id: 5,
    title: 'Future Tech',
    category: 'App Design',
    image: '🚀'
  },
  {
    id: 6,
    title: 'Urban Vibes',
    category: 'Branding',
    image: '🏙️'
  }
];

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <section className="portfolio-hero container">
        <h2 className="section-subtitle">Our Work</h2>
        <h1 className="section-title">Selected <span className="title-accent">Projects.</span></h1>
      </section>

      <section className="portfolio-grid-section container">
        <div className="portfolio-grid">
          {PROJECTS.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">{project.image}</div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <button className="project-link">Learn More <span>→</span></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
