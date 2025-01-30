// src/reducers/cartReducer.js
export const initialCartState = []; // Boş sepet durumu

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Ürün zaten sepette varsa, miktarını artır
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Yeni ürün ekle
      return [...state, { ...action.payload, quantity: 1 }];
      
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);
      
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );

    default:
      return state;
  }
};
