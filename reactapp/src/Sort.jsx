import React from 'react';

function Sort({ onSort }) {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div>
      <form className='sortform'>
        <label>Sort by:</label>
        <select onChange={handleSortChange}>
          <option value="">--select--</option>
          <option value="date">Date</option>
          <option value="time">Time</option>
        </select>
      </form>
    </div>
  );
}

export default Sort;