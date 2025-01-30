import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Fiyat: {product.price} TL</p>
      <Link to={`/product/${product.id}`}>Detay</Link>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;
