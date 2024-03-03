import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import Search from './Search';
import Sort from './Sort';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/customers'); 
      //console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSort = (sortBy) => {
    setSortBy(sortBy);
  };

  return (
    <div>
      <h1>Customer Details</h1>
      <div className="search-sort-container">
      <Search onSearch={handleSearch} />
      <Sort onSort={handleSort} />
      </div>
      <Table data={data} searchTerm={searchTerm} sortBy={sortBy} />
    </div>
  );
}

export default App;
