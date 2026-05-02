import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../api/axiosInstance';

const AdminPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [dashData, setDashData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axiosInstance.get('/admin-dashboard');
        setDashData(res.data);
      } catch (err) {
        if (err.response?.status === 403) {
          setError('Access Denied: You need admin privileges to view this page.');
        } else if (err.response?.status === 401) {
          logout();
          navigate('/login');
        } else {
          setError(err.response?.data?.message || 'Failed to load dashboard.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="page-center">
        <div className="loading-card">
          <div className="big-spinner"></div>
          <p className="loading-text">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <p className="dashboard-subtitle">Restricted to administrators only</p>
      </div>

      {error && (
        <div className="alert alert-error" id="admin-error">
          🚫 {error}
        </div>
      )}

      {dashData && (
        <>
          <div className="admin-welcome" id="admin-welcome-msg">
            <span className="admin-welcome-icon">🛡️</span>
            <p>{dashData.message}</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card stat-blue" id="stat-users">
              <div className="stat-icon">👥</div>
              <div className="stat-value">{dashData.adminStats?.usersCount}</div>
              <div className="stat-label">Total Users</div>
            </div>

            <div className="stat-card stat-green" id="stat-revenue">
              <div className="stat-icon">💰</div>
              <div className="stat-value">{dashData.adminStats?.revenue}</div>
              <div className="stat-label">Revenue</div>
            </div>

            <div className="stat-card stat-purple" id="stat-sessions">
              <div className="stat-icon">🔗</div>
              <div className="stat-value">{dashData.adminStats?.activeSessions}</div>
              <div className="stat-label">Active Sessions</div>
            </div>

            <div className="stat-card stat-orange" id="stat-signups">
              <div className="stat-icon">✨</div>
              <div className="stat-value">{dashData.adminStats?.newSignups}</div>
              <div className="stat-label">New Signups Today</div>
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default AdminPage;
