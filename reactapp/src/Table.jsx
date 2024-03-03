import React, { useState } from 'react';

function Table({ data, searchTerm, sortBy }) {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredData = data.filter((item) =>
    (item.Customer_name && item.Customer_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (item.Location && item.Location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedData = sortBy ? filteredData.sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === 'time') {
      return new Date('1970-01-01 ' + a.time) - new Date('1970-01-01 ' + b.time);
    }
    return 0;
  }) : filteredData;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = sortedData.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((item, index) => (
            <tr key={index}>
              <td>{item.S_no}</td>
              <td>{item.Customer_name}</td>
              <td>{item.Age}</td>
              <td>{item.Phone}</td>
              <td>{item.Location}</td>
              <td>{item.date.substring(0, 10)}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Pagination */}
      <ul className="pagination">
        {Array.from({ length: Math.ceil(filteredData.length / recordsPerPage) }, (_, i) => (
          <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}>
            <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;
