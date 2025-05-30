export default function Navbar({ handleSmoothScroll }) {
  return (
    <>
      {/* --- Navbar (Basic) --- */}
      {/* Navbar typically doesn't need to be animated on scroll */}
      <nav className="bg-gray-900 p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-purple-400">
            Solaris Engine LLC
          </a>
          <div className="space-x-4">
            <a
              onClick={handleSmoothScroll('services')}
              style={{ cursor: 'pointer' }}
              className="text-gray-300 hover:text-purple-400"
            >
              Services
            </a>
            <a href="#about" className="text-gray-300 hover:text-purple-400">
              About Us
            </a>
            <a
              onClick={handleSmoothScroll('contact')}
              style={{ cursor: 'pointer' }}
              className="text-gray-300 hover:text-purple-400"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
