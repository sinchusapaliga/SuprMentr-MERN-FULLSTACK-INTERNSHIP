import React from 'react';

const Navbar = ({ searchTerm, setSearchTerm, cartCount }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-icon">✧</span>
        <span className="logo-text">AETHER</span>
      </div>
      
      <div className="nav-search">
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          placeholder="Explore curated products..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="nav-actions">
        <div className="cart-container">
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
        <div className="user-profile">
          <img src="https://ui-avatars.com/api/?name=User&background=6366f1&color=fff" alt="User" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
