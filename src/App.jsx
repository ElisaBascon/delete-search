import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';

function App() {
  const [products, setProducts] = useState(productData);

  const handleDelete = (id) => {
    const filtered = products.filter(elem => elem._id !==id);
    setProducts(filtered);
  }

  const handleSearch = (searchValue) => {
    if (searchValue === '') {
      setProducts(productData)
      } else {
        const filtered = products.filter(elem => elem.name.toLowerCase().includes(searchValue));
        setProducts(filtered)
      }
  }


  return (
    <div className="cart">
      <h1>My shopping cart</h1>
      <SearchBar onSearch={handleSearch} />

      {/* Your code goes here */}
      {products.map((elem) => {
        return (
        <ProductCard key={elem._id} products={elem} onDelete={handleDelete} />
        )
      })}
    </div>
  );
}

export default App;
