// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductsContext';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { products } = useProducts();

  // ID ile eşleşen ürünü bul
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Ürün bulunamadı.</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Fiyat: {product.price} TL</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Sepete Ekle</button>
    </div>
  );
};

export default ProductDetail;
