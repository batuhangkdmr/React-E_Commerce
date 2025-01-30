import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Sepetim</h2>
      {cartItems.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>Fiyat: {item.price} TL</p>
              <p>Adet: {item.quantity}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Kaldır</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
