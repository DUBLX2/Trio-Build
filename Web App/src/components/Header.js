import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavButtons from './NavButtons';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Events', to: '/events' },
    { label: 'Shop', to: '/shop' },
    { label: 'Community', to: '/community' },
    { label: 'Contact', to: '/contact' },
    { label: 'Socials', to: '/socials' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
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
      </div>
      <NavButtons links={links} isOpen={menuOpen} onLinkClick={() => setMenuOpen(false)} />
    </header>
  );
}
