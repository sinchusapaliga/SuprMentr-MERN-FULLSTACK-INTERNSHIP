import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero container">
        <h2 className="section-subtitle">Get In Touch</h2>
        <h1 className="section-title">Let's build something <span className="title-accent">Legendary.</span></h1>
      </section>

      <section className="contact-content container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <h3>Office</h3>
              <p>123 Agency Plaza, Suite 400<br />New York, NY 10001</p>
            </div>
            <div className="info-item">
              <h3>Business Inquiries</h3>
              <p>hello@vanguardstudios.com<br />+1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#">TW</a>
                <a href="#">IG</a>
                <a href="#">LI</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Project Budget</label>
              <select>
                <option>$5k - $10k</option>
                <option>$10k - $25k</option>
                <option>$25k - $50k</option>
                <option>$50k+</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your project..." rows="5"></textarea>
            </div>
            <button type="submit" className="btn-primary form-submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
