import React, { useState } from 'react';
import { useProducts } from '../context/ProductsContext';

const PanelAddProduct = () => {
  const { addProduct } = useProducts();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState('');

  // Mevcut kategoriler
  const categories = ['Elektronik', 'Moda', 'Ev & Yaşam', 'Spor & Outdoor', 'Kitap'];

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(productPrice),
      category: productCategory,
      image: productImage,
    };

    addProduct(newProduct);
    setProductName('');
    setProductPrice('');
    setProductCategory('');
    setProductImage('');
  };

  return (
    <div>
      <h2>Yeni Ürün Ekle</h2>
      <input
        type="text"
        placeholder="Ürün Adı"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Fiyat"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <select
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
      >
        <option value="">Kategori Seçin</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Görsel URL"
        value={productImage}
        onChange={(e) => setProductImage(e.target.value)}
      />
      <button onClick={handleAddProduct}>Ürün Ekle</button>
    </div>
  );
};

export default PanelAddProduct;
