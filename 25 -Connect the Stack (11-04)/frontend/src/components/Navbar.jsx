import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">⚡</span>
        <span className="brand-name">ConnectStack</span>
      </div>

      <div className="navbar-links">
        {isAuthenticated ? (
          <>
            <Link to="/profile" className={`nav-link ${isActive('/profile') ? 'active' : ''}`}>
              Profile
            </Link>
            {user?.role === 'admin' && (
              <Link to="/admin" className={`nav-link ${isActive('/admin') ? 'active' : ''}`}>
                Admin
              </Link>
            )}
            <div className="nav-user">
              <span className="nav-username">👤 {user?.username}</span>
              <span className={`role-badge ${user?.role === 'admin' ? 'badge-admin' : 'badge-user'}`}>
                {user?.role}
              </span>
            </div>
            <button onClick={handleLogout} className="btn btn-logout">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className={`nav-link ${isActive('/login') ? 'active' : ''}`}>
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary btn-sm">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
