import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignupPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '', role: 'user' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const data = await signup(form.username, form.password, form.role);
      setSuccess(`Account created! Redirecting to login...`);
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-center">
      <div className="auth-card">
        <div className="auth-card-header">
          <div className="auth-icon">🚀</div>
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join ConnectStack today</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form" id="signup-form">
          <div className="form-group">
            <label htmlFor="signup-username" className="form-label">Username</label>
            <input
              id="signup-username"
              type="text"
              name="username"
              placeholder="Choose a username"
              value={form.username}
              onChange={handleChange}
              className="form-input"
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-password" className="form-label">Password</label>
            <input
              id="signup-password"
              type="password"
              name="password"
              placeholder="Choose a password"
              value={form.password}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-role" className="form-label">Role</label>
            <select
              id="signup-role"
              name="role"
              value={form.role}
              onChange={handleChange}
              className="form-input form-select"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {error && <div className="alert alert-error" id="signup-error">{error}</div>}
          {success && <div className="alert alert-success" id="signup-success">{success}</div>}

          <button type="submit" className="btn btn-primary btn-full" disabled={loading} id="signup-submit">
            {loading ? <span className="spinner"></span> : 'Create Account'}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{' '}
          <Link to="/login" className="auth-link">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
