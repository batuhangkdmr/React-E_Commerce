import React, { useState } from 'react';
import { useProducts } from '../context/ProductsContext';
import styles from '../styles/Panel.module.css';

const Panel = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false); // Accordion durumunu kontrol etmek için state

  const categories = ['Elektronik', 'Moda', 'Ev & Yaşam', 'Spor & Outdoor', 'Kitap'];

  const handleAddOrUpdateProduct = () => {
    const newProduct = {
      id: editingProduct ? editingProduct.id : Date.now(),
      name: productName,
      price: parseFloat(productPrice),
      category: productCategory,
      image: productImage,
    };

    if (editingProduct) {
      updateProduct(newProduct);
      setEditingProduct(null); // Düzenleme işleminden sonra sıfırlama
    } else {
      addProduct(newProduct);
    }

    // Formu temizle
    setProductName('');
    setProductPrice('');
    setProductCategory('');
    setProductImage('');
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductName(product.name);
    setProductPrice(product.price);
    setProductCategory(product.category);
    setProductImage(product.image);
  };

  const handleDeleteProduct = (productId) => {
    deleteProduct(productId);
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className={styles.panelContainer}>
      <h2>Yönetim Paneli</h2>
      <h3>{editingProduct ? 'Ürünü Güncelle' : 'Yeni Ürün Ekle'}</h3>
      <div className={styles.formContainer}>
        <input
          type="text"
          placeholder="Ürün Adı"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="number"
          placeholder="Fiyat"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className={styles.inputField}
        />
        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className={styles.selectField}
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
          className={styles.inputField}
        />
        <button onClick={handleAddOrUpdateProduct} className={styles.actionButton}>
          {editingProduct ? 'Güncelle' : 'Ürün Ekle'}
        </button>
      </div>

      <div className={styles.accordion}>
        <button onClick={toggleAccordion} className={styles.accordionButton}>
          {isAccordionOpen ? 'Ürün Listesini Gizle' : 'Ürün Listesini Göster'}
        </button>
        {isAccordionOpen && (
          <div className={styles.productList}>
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <img src={product.image} alt={product.name} className={styles.productImage} />
                  <h4>{product.name}</h4>
                  <p>Kategori: {product.category}</p>
                  <p>Fiyat: {product.price} TL</p>
                  <button onClick={() => handleEditProduct(product)} className={styles.editButton}>
                    Düzenle
                  </button>
                  <button onClick={() => handleDeleteProduct(product.id)} className={styles.deleteButton}>
                    Sil
                  </button>
                </div>
              ))
            ) : (
              <p>Henüz bir ürün eklenmedi.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Panel;
