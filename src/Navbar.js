// src/Navbar.js
import React from 'react';

const Navbar = () => {
  const navStyle = { backgroundColor: '#f7e481' }; // Ajuste o valor conforme necessário

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
      <div className="container">
        <a className="navbar-brand" href="#">
          Serviços <strong>Mercado livre</strong>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
