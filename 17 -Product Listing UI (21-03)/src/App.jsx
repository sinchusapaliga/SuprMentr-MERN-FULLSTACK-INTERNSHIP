import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import { products as initialProducts } from './data/products';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(1500);
  const [cartCount, setCartCount] = useState(0);

  const categories = useMemo(() => {
    const cats = initialProducts.map(p => p.category);
    return [...new Set(cats)];
  }, []);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesPrice = product.price <= priceRange;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, activeCategory, priceRange]);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="app-container">
      <Navbar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        cartCount={cartCount} 
      />
      
      <main className="main-content">
        <Sidebar 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          productsCount={filteredProducts.length}
        />
        
        <section className="product-section">
          <header className="section-header">
            <div>
              <h2>Curated Collection</h2>
              <p>Discover premium essentials for your modern lifestyle.</p>
            </div>
            <div className="category-tags">
              <span className="tag">{activeCategory}</span>
              {searchTerm && <span className="tag search-tag">Search: {searchTerm}</span>}
            </div>
          </header>
          
          <ProductGrid 
            products={filteredProducts} 
            addToCart={addToCart} 
          />
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2026 Aether E-Commerce. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
