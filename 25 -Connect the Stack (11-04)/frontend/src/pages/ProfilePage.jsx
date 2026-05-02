import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../api/axiosInstance';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get('/profile');
        setProfileData(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load profile.');
        if (err.response?.status === 401) {
          logout();
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="page-center">
        <div className="loading-card">
          <div className="big-spinner"></div>
          <p className="loading-text">Loading your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">My Profile</h1>
        <p className="dashboard-subtitle">Your account information from the API</p>
      </div>

      {error && <div className="alert alert-error">{error}</div>}

      {profileData && (
        <div className="cards-grid">
          <div className="info-card" id="profile-welcome-card">
            <div className="info-card-icon">👋</div>
            <div className="info-card-content">
              <h2 className="info-card-title">Welcome Message</h2>
              <p className="info-card-value">{profileData.message}</p>
            </div>
          </div>

          <div className="info-card" id="profile-username-card">
            <div className="info-card-icon">👤</div>
            <div className="info-card-content">
              <h2 className="info-card-title">Username</h2>
              <p className="info-card-value" id="profile-username">{profileData.user?.username}</p>
            </div>
          </div>

          <div className="info-card" id="profile-role-card">
            <div className="info-card-icon">🛡️</div>
            <div className="info-card-content">
              <h2 className="info-card-title">Role</h2>
              <span className={`role-badge-lg ${profileData.user?.role === 'admin' ? 'badge-admin' : 'badge-user'}`} id="profile-role">
                {profileData.user?.role}
              </span>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default ProfilePage;
