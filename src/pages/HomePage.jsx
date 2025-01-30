import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductsContext';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import MenuItems from '../components/MenuItems';
import Notification from '../components/Notification';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {


  const { products } = useProducts();
  const { addToCart } = useCart();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesQuery && matchesCategory;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowNotification(true);
  };

  return (
    <div className={styles['home-page']}>
      <SearchBar onSearch={(searchQuery) => setQuery(searchQuery)} />
      <MenuItems onSelectCategory={(category) => setSelectedCategory(category)} />
      <div className={styles['product-list']}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
        ))}
      </div>
      {showNotification && (
        <Notification
          message="Ürün sepete eklendi!"
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};

export default HomePage;
