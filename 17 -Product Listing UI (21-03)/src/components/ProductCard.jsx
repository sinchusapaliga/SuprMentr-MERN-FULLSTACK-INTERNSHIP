import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card fade-in">
      {product.isPopular && <span className="badge-popular">Popular</span>}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="card-overlay">
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <div className="product-rating">
            <span className="star-icon">★</span>
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
