import React from 'react';
import { Link } from 'react-router-dom';
import './NavButtons.css';

export default function NavButtons({ links, isOpen, onLinkClick }) {
  const defaultLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Books', to: '/books' },
    { label: 'Members', to: '/members' },
    { label: 'Contact', to: '/contact' },
  ];

  const items = links && links.length ? links : defaultLinks;

  return (
    <nav className={`nav-buttons ${isOpen ? 'open' : ''}`} aria-label="Primary navigation">
      <ul>
        {items.map((l) => (
          <li key={l.label}>
            {l.to ? (
              <Link className="nav-link" to={l.to} onClick={onLinkClick}>
                {l.label}
              </Link>
            ) : (
              <a className="nav-link" href={l.href || '#'} onClick={onLinkClick}>{l.label}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
