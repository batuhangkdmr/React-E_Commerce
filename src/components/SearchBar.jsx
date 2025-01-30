// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/SearchBar.css'; // Stil dosyası, daha sonra ekleyeceğiz

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (onSearch) {
//       onSearch(query);
//     }
//   };

//   return (
//     <form className="search-bar" onSubmit={handleSearch}>
//       <input
//         type="text"
//         placeholder="Ürün Ara..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button type="submit">Ara</button>
//     </form>
//   );
// };

// export default SearchBar;


// src/components/SearchBar.jsx

import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Ürün Ara..." 
        value={query} 
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value); // Anında arama için
        }}
      />
      <button onClick={handleSearch}>Ara</button>
    </div>
  );
};

export default SearchBar;
