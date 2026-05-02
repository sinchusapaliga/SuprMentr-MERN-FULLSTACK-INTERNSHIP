import React from 'react';

const Sidebar = ({ categories, activeCategory, setActiveCategory, priceRange, setPriceRange, productsCount }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-group">
        <h3>Categories</h3>
        <div className="category-list">
          <button 
            className={activeCategory === "All" ? "active" : ""}
            onClick={() => setActiveCategory("All")}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button 
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="sidebar-group">
        <h3>Price Range</h3>
        <div className="price-slider">
          <div className="price-info">
            <span>$0</span>
            <span>${priceRange}</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="1500" 
            value={priceRange} 
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="sidebar-footer">
        <p>Showing <span>{productsCount}</span> products</p>
      </div>
    </aside>
  );
};

export default Sidebar;
