import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <form className='searchform'>
      <label>Search: </label>
      <input
        type="text"
        placeholder="Search for customer by name or location"
        value={searchTerm}
        onChange={handleChange}
      />
      </form>
    </div>
  );
}

export default Search;
