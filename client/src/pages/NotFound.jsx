import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-purple-400 mb-4">404</h1>
      <p className="text-2xl mb-2">Uh oh, you’ve hit a wormhole!</p>
      <p className="mb-6">This page does not exist in this universe.</p>
      <Link
        to="/"
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition"
      >
        Beam me home
      </Link>
    </div>
  );
}