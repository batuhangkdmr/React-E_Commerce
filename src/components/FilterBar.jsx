// src/components/FilterBar.jsx
import React from 'react';
import '../styles/FilterBar.css';

const FilterBar = ({ onPriceChange }) => {
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    onPriceChange((prevRange) => ({
      ...prevRange,
      [name]: value ? parseFloat(value) : 0,
    }));
  };

  return (
    <div className="filter-bar">
      <label>Fiyat Aralığı:</label>
      <input
        type="number"
        name="min"
        placeholder="Min"
        onChange={handlePriceChange}
      />
      <input
        type="number"
        name="max"
        placeholder="Max"
        onChange={handlePriceChange}
      />
    </div>
  );
};

export default FilterBar;
