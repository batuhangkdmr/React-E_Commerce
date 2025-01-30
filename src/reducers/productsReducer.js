import initialProducts from '../data/data.json';

export const initialProductsState = initialProducts.products; // Başlangıç durumu ürün listesi

export const productsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];
      
    case 'UPDATE_PRODUCT':
      return state.map(product =>
        product.id === action.payload.id ? { ...action.payload } : product
      );
      
    case 'DELETE_PRODUCT':
      return state.filter(product => product.id !== action.payload.id);

    default:
      return state;
  }
};
