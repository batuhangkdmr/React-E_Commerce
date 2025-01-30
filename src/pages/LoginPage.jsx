// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Local Storage'dan kullanıcıları al
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Giriş bilgilerini doğrula
    const userExists = storedUsers.some(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      alert("Giriş başarılı!");
      // Giriş sonrası yapılacak işlemler
    } else {
      alert("Email veya şifre hatalı!");
    }
  };

  return (
    <div className="login-page">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <label>Şifre:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginPage;
