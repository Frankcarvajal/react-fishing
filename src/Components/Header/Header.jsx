import './Header.css'

import React from 'react';
import logo from '../../Assets/logo.svg';

function Header() {
  return (
    <div className="Header-component">
      <header className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1>
          React Fishing <span role="img" aria-label="fishing pole with fish caught">🎣</span>
        </h1>
      </header>
    </div>
  );
}

export default Header;
