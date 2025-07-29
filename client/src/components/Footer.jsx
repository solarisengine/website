export default function Footer() {
  return (
    <>
      {/* --- Footer --- */}
      {/* Footer typically doesn't need animation */}
      <footer className="bg-slate-900 py-8 text-center text-gray-400 border-t border-blue-800/30">
        <div className="container mx-auto px-4">
          <p>
            &copy; {new Date().getFullYear()} Solaris Engine LLC. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
