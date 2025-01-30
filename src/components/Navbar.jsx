import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Stil dosyası, daha sonra ekleyeceğiz

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">Marka İkonu</Link>
      </div>
      <div className="navbar__links">
        <Link to="/login">Giriş Yap</Link>
        <Link to="/register">Kayıt Ol</Link>
        <Link to="/cart">Sepetim</Link>
        <Link to="/panel">Yönetim Paneli</Link> {/* Yönetim Paneli bağlantısı */}
      </div>
    </nav>
  );
};

export default Navbar;
