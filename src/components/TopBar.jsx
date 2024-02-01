import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import '../css/style.css';

function Header() {
  const [isNavigationActive, setNavigationActive] = useState(false);

  const handleMouseOver = () => {
    setNavigationActive(false); // Reset active class on mouseover
  };

  // Menu Toggle
  const handleToggleClick = () => {
    setNavigationActive(!isNavigationActive);
  };

  return (
    <div className="topbar">
      <div className="toggle" onClick={handleToggleClick}>
        <img className="icon-search" src="../src/assets/imgs/more.png" alt="" />
      </div>

      <div className="search">
        <label className="search-label" onMouseOver={handleMouseOver}>
          <input type="text" placeholder="Search here" />
          <img className="icon-search" src="../src/assets/imgs/search.png" alt="" />
        </label>
      </div>

      {/* <div className="user">
        <img src="../src/assets/imgs/interest-rate.png" alt="" />
      </div> */}
    </div>
  );
}

export default Header;
