import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Crafting <span className="title-accent">Digital</span> <br />
              Excellence.
            </h1>
            <p className="hero-description">
              We are a creative agency dedicated to building immersive digital experiences that resonate with users and drive growth.
            </p>
            <div className="hero-actions">
              <NavLink to="/portfolio" className="btn-primary">
                View Our Work
              </NavLink>
              <NavLink to="/contact" className="btn-secondary">
                Get In Touch
              </NavLink>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-circle"></div>
            <div className="visual-circle small"></div>
            <div className="visual-shape"></div>
          </div>
        </div>
      </section>

      <section className="stats container">
        <div className="stat-card">
          <h3>150+</h3>
          <p>Projects Finished</p>
        </div>
        <div className="stat-card">
          <h3>12+</h3>
          <p>Awards Won</p>
        </div>
        <div className="stat-card">
          <h3>99%</h3>
          <p>Client Satisfaction</p>
        </div>
      </section>
    </div>
  );
}
