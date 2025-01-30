// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Panel from './pages/Panel';
import PanelAddProduct from './pages/PanelAddProduct';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/panel" element={<Panel />} />
            <Route path="/panel/add" element={<PanelAddProduct />} />
          </Routes>
        </Router>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
