import React, { useState } from 'react';

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    
    // Function to handle search input change
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
    
    // Function to perform search
    const performSearch = () => {
      // Your search logic here
      // For simplicity, we'll just filter an array of items
      const results = items.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={performSearch}>Search</button>
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SearchComponent;
  