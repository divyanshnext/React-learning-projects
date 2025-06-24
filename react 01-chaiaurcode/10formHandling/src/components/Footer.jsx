import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '10px 20px', backgroundColor: '#f8f8f8', borderTop: '1px solid #ddd', textAlign: 'center' }}>
      <div style={{ marginBottom: '10px' }}>
        <a href="/about" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>About Us</a>
        <a href="/contact" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Contact</a>
        <a href="/privacy" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Privacy Policy</a>
      </div>
      <div style={{ fontSize: '14px', color: '#666' }}>
        © 2024 E-Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
