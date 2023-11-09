import React, { useState } from 'react';
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='searchContent'>
      <input className='searchBar'
        type="text" 
        placeholder="Buscar..." 
        value={query} 
        onChange={handleInputChange} 
      />
      <button className='btnSearch' onClick={handleSearch}>B</button>
    </div>
  );
};

export default SearchBar;
