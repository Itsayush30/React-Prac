import React, { useState } from 'react';
import './Sidebar.css'; // Import CSS file for styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-btn">
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <ul className="sidebar-menu">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
    </div>
  );
};

export default Sidebar;
