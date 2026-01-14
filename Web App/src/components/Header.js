import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavButtons from './NavButtons';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Events', to: '/events' },
    { label: 'Community', to: '/community' },
    { label: 'Shop', to: '/shop' },
    { label: 'Account', to: '/account' },
    { label: 'Socials', to: '/socials' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="header-link">
        <h1 className="header-title">Sequencial Hub</h1>
      </Link>
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <NavButtons links={links} isOpen={menuOpen} onLinkClick={() => setMenuOpen(false)} />
      <button
        onClick={() => navigate('/cart')}
        style={{
          marginLeft: 'auto',
          marginRight: '20px',
          backgroundColor: 'transparent',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
        title="Shopping Cart"
      >
        🛒 Cart
      </button>
    </header>
  );
}
