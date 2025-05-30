import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ handleSmoothScroll }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl md:text-4xl font-bold text-purple-400 tracking-wider"
          style={{
            fontFamily: "'ProggyClean Nerd Font', 'monospace'",
            letterSpacing: '0.08em',
          }}
        >
          Solaris Engine
        </Link>
        {/* Desktop links */}
        {isHome ? (
          <>
            <div className="hidden md:flex space-x-4">
              <a
                onClick={handleSmoothScroll('services')}
                style={{ cursor: 'pointer' }}
                className="text-gray-300 hover:text-purple-400"
              >
                Services
              </a>
              <Link to="/about" className="text-gray-300 hover:text-purple-400">
                About Us
              </Link>
              <a
                onClick={handleSmoothScroll('contact')}
                style={{ cursor: 'pointer' }}
                className="text-gray-300 hover:text-purple-400"
              >
                Contact
              </a>
            </div>
            {/* Hamburger for mobile */}
            <button
              className="md:hidden text-gray-300 hover:text-purple-400 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Mobile menu */}
            {menuOpen && (
              <div className="absolute top-16 left-0 w-full bg-gray-900 z-50 flex flex-col items-center py-4 space-y-2 shadow-lg md:hidden">
                <a
                  onClick={(e) => {
                    handleSmoothScroll('services')(e);
                    setMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-purple-400 text-lg"
                  style={{ cursor: 'pointer' }}
                >
                  Services
                </a>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-purple-400 text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
                <a
                  onClick={(e) => {
                    handleSmoothScroll('contact')(e);
                    setMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-purple-400 text-lg"
                  style={{ cursor: 'pointer' }}
                >
                  Contact
                </a>
              </div>
            )}
          </>
        ) : (
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-300 hover:text-purple-400">
              Home
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
