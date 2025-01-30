// src/pages/ProductList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';
import '../styles/ProductList.css';

const ProductList = () => {
  const { products } = useProducts();

  return (
    <div className="product-list">
      <h2>Ürün Listesi</h2>
      {products.length === 0 ? (
        <p>Ürün bulunamadı.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Fiyat: {product.price} TL</p>
              <Link to={`/product/${product.id}`}>Detay</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
