import React, { useState, useEffect } from 'react';
import './SignupForm.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [validation, setValidation] = useState({
    email: { valid: false, touched: false },
    password: {
      hasMinLen: false,
      hasUpper: false,
      hasNumber: false,
      hasSpecial: false,
      strength: 0,
      touched: false
    },
    confirm: { valid: false, touched: false }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Mark field as touched
    setValidation(prev => ({
      ...prev,
      [name === 'confirmPassword' ? 'confirm' : name]: {
        ...prev[name === 'confirmPassword' ? 'confirm' : name],
        touched: true
      }
    }));
  };

  // Password Strength Logic
  useEffect(() => {
    const { password } = formData;
    const hasMinLen = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let strength = 0;
    if (password.length > 0) {
      if (hasMinLen) strength += 1;
      if (hasUpper) strength += 1;
      if (hasNumber) strength += 1;
      if (hasSpecial) strength += 1;
    }

    setValidation(prev => ({
      ...prev,
      password: { ...prev.password, hasMinLen, hasUpper, hasNumber, hasSpecial, strength }
    }));
  }, [formData.password]);

  // Email Validation Logic
  useEffect(() => {
    setValidation(prev => ({
      ...prev,
      email: { ...prev.email, valid: EMAIL_REGEX.test(formData.email) }
    }));
  }, [formData.email]);

  // Confirm Password Logic
  useEffect(() => {
    setValidation(prev => ({
      ...prev,
      confirm: { ...prev.confirm, valid: formData.confirmPassword === formData.password && formData.confirmPassword !== '' }
    }));
  }, [formData.confirmPassword, formData.password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const isFormValid = validation.email.valid && validation.password.strength === 4 && validation.confirm.valid;

  if (isSuccess) {
    return (
      <div className="success-container anim-fade-in">
        <div className="success-icon">🎉</div>
        <h2>Welcome Aboard!</h2>
        <p>Your account has been created successfully.</p>
        <button className="btn-primary" onClick={() => window.location.reload()}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="form-wrapper anim-fade-in">
      <div className="form-header">
        <h1>Create <span className="title-accent">Account</span></h1>
        <p>Join our community today.</p>
      </div>

      <form className="signup-form" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className={`form-group ${validation.email.touched && !validation.email.valid ? 'error' : ''}`}>
          <label>Email Address</label>
          <div className="input-container">
            <input 
              type="email" 
              name="email"
              placeholder="hello@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {validation.email.touched && (
              <span className="status-icon">
                {validation.email.valid ? '✅' : '❌'}
              </span>
            )}
          </div>
          {validation.email.touched && !validation.email.valid && (
            <p className="error-text">Please enter a valid email address.</p>
          )}
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label>Password</label>
          <div className="input-container">
            <input 
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          {/* Strength Meter */}
          <div className="strength-meter">
            <div className={`meter-bar strength-${validation.password.strength}`}></div>
            <p className="strength-label">
              Strength: {['Too Short', 'Weak', 'Fair', 'Good', 'Strong'][validation.password.strength]}
            </p>
          </div>

          {/* Validation Checklist */}
          <ul className="checklist">
            <li className={validation.password.hasMinLen ? 'checked' : ''}>8+ Characters</li>
            <li className={validation.password.hasUpper ? 'checked' : ''}>One Uppercase</li>
            <li className={validation.password.hasNumber ? 'checked' : ''}>One Number</li>
            <li className={validation.password.hasSpecial ? 'checked' : ''}>One Special</li>
          </ul>
        </div>

        {/* Confirm Password Field */}
        <div className={`form-group ${validation.confirm.touched && !validation.confirm.valid ? 'error' : ''}`}>
          <label>Confirm Password</label>
          <div className="input-container">
            <input 
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {validation.confirm.touched && (
              <span className="status-icon">
                {validation.confirm.valid ? '✅' : '❌'}
              </span>
            )}
          </div>
          {validation.confirm.touched && !validation.confirm.valid && (
            <p className="error-text">Passwords do not match.</p>
          )}
        </div>

        <button 
          type="submit" 
          className="btn-primary form-submit"
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
