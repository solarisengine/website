import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-indigo-950 text-gray-200 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 opacity-10 cosmic-bg">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-orange-400 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-32 w-20 h-20 bg-yellow-500 rounded-full blur-2xl"></div>
      </div>

      {/* Twinkling stars */}
      <div className="absolute inset-0 opacity-20 cosmic-stars">
        <div className="absolute top-16 left-16 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-48 right-24 w-1.5 h-1.5 bg-orange-300 rounded-full"></div>
        <div className="absolute bottom-32 left-24 w-1 h-1 bg-yellow-300 rounded-full"></div>
        <div className="absolute bottom-48 right-16 w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-orange-400 rounded-full"></div>
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-white rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4 cosmic-glow">
          404
        </h1>
        <p className="text-xl md:text-2xl mb-2">
          Uh oh, you've hit a wormhole!
        </p>
        <p className="mb-8 text-base md:text-lg">
          This page does not exist in this universe.
        </p>
        <Link
          to="/"
          className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-slate-900 px-6 py-3 rounded-full font-semibold transition duration-300 transform hover:scale-105 cosmic-hover shadow-lg"
        >
          Beam me home
        </Link>
      </div>
    </div>
  );
}
