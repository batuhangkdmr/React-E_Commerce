// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Şifreler eşleşmiyor!");
      return;
    }

    // Yeni kullanıcı nesnesi
    const newUser = { email, password };
    
    // Mevcut kullanıcıları al
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    // Yeni kullanıcıyı ekle
    storedUsers.push(newUser);
    
    // Güncellenmiş kullanıcı listesini Local Storage'a kaydet
    localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("Kayıt başarılı! Giriş yapabilirsiniz.");
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="register-page">
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleRegister}>
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
        <label>Şifreyi Onayla:</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
};

export default RegisterPage;
