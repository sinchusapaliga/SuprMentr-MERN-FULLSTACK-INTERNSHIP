import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, addToCart }) => {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">📂</span>
        <h3>No products found</h3>
        <p>Try adjusting your search or category filters.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductGrid;
