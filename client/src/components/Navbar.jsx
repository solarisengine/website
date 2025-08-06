import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ handleSmoothScroll }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm p-4 shadow-lg border-b border-blue-800/30">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent tracking-wider"
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
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
              >
                Services
              </a>
              <Link
                to="/about"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
              >
                About Us
              </Link>
              <a
                onClick={handleSmoothScroll('contact')}
                style={{ cursor: 'pointer' }}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
            {/* Hamburger for mobile */}
            <button
              className="md:hidden text-gray-300 hover:text-orange-400 focus:outline-none transition-colors duration-300"
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
              <div className="absolute top-16 left-0 w-full bg-slate-900/98 backdrop-blur-sm z-50 flex flex-col items-center py-4 space-y-2 shadow-lg border-b border-blue-800/30 md:hidden">
                <a
                  onClick={(e) => {
                    handleSmoothScroll('services')(e);
                    setMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-orange-400 text-lg transition-colors duration-300"
                  style={{ cursor: 'pointer' }}
                >
                  Services
                </a>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-orange-400 text-lg transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
                <a
                  onClick={(e) => {
                    handleSmoothScroll('contact')(e);
                    setMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-orange-400 text-lg transition-colors duration-300"
                  style={{ cursor: 'pointer' }}
                >
                  Contact
                </a>
              </div>
            )}
          </>
        ) : (
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
            >
              Home
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
