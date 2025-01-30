import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Reducer fonksiyonu ve initialState'i tanımlıyoruz
const initialProductsState = [];

const productsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'UPDATE_PRODUCT':
      return state.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    case 'DELETE_PRODUCT':
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
};

const ProductsContext = createContext();
export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productsReducer, initialProductsState);

  // Verileri API'den çekme işlemi
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3005/products');
        const data = await response.json();
        dispatch({ type: 'SET_PRODUCTS', payload: data });
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };
    fetchProducts();
  }, []);

 
  const addProduct = async (newProduct) => {
    try {
      const response = await fetch('http://localhost:3005/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });
      const addedProduct = await response.json();
      dispatch({ type: 'ADD_PRODUCT', payload: addedProduct });
    } catch (error) {
      console.error('Ürün ekleme hatası:', error);
    }
  };

  const updateProduct = async (updatedProduct) => {

    try {
      const response = await fetch(`http://localhost:3005/products/${updatedProduct.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct),
      });
      const result = await response.json();
      dispatch({ type: 'UPDATE_PRODUCT', payload: result });
    } catch (error) {
      console.error('Ürün güncelleme hatası:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await fetch(`http://localhost:3005/products/${productId}`, {
        method: 'DELETE',
      });
      dispatch({ type: 'DELETE_PRODUCT', payload: productId });
    } catch (error) {
      console.error('Ürün silme hatası:', error);
    }
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
