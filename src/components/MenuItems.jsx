// import React from 'react';
// import '../styles/MenuItems.css'; // Stil dosyası, daha sonra ekleyeceğiz
// import { Link } from 'react-router-dom';

// const categories = ['Elektronik', 'Moda', 'Ev ve Yaşam', 'Spor', 'Kitap'];

// const MenuItems = () => {
//   return (
//     <div className="menu-items">
//       {categories.map((category) => (
//         <Link key={category} to={`/category/${category.toLowerCase()}`}>
//           {category}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default MenuItems;

import React from 'react';
import '../styles/MenuItems.css';
import { Link } from 'react-router-dom';

const MenuItems = ({ onSelectCategory }) => {
  const categories = ['Elektronik', 'Moda', 'Ev & Yaşam', 'Spor & Outdoor', 'Kitap'];

  return (
    <div className="menu-items">
      {categories.map((category) => (
        <button 
          key={category} 
          onClick={() => onSelectCategory(category)}
          className="bn59" // Yeni buton stilini uyguladık
        >
          {category}
        </button>
      ))}
      <button onClick={() => onSelectCategory('')} className="bn59">
        Tüm Ürünler
      </button>
    </div>
  );
};

export default MenuItems;