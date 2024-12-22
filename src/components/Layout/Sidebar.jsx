import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Filters</h2>
      {/* Add filter options here */}
      <div className="filter-category">
        <h3>Categories</h3>
        <ul>
          <li>Electronics</li>
          <li>Fashion</li>
          <li>Home & Living</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="filter-price">
        <h3>Price Range</h3>
        <input type="range" min="0" max="1000" />
      </div>
    </div>
  );
};

export default Sidebar;