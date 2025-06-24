import React from 'react';

function Navbar() {
  return (
    <nav style={{ padding: '10px 20px', backgroundColor: '#f8f8f8', borderBottom: '1px solid #ddd' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
          <a href="/" style={{ textDecoration: 'none', color: '#333' }}>E-Shop</a>
        </div>
        <div>
          <a href="/products" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Products</a>
          <a href="/cart" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Cart</a>
          <a href="/profile" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Profile</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
